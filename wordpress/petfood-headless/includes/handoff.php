<?php
/**
 * Pet Rasoi Checkout Handoff Bridge
 * Server-to-server signed creation and single-use interstitial consumption.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route('petfood/v1', '/handoffs', [
        'methods'             => \WP_REST_Server::CREATABLE,
        'callback'            => 'petfood_create_handoff',
        'permission_callback' => 'petfood_verify_handoff_hmac',
    ]);
});

/**
 * Verify HMAC signature on server-to-server requests
 */
function petfood_verify_handoff_hmac(\WP_REST_Request $request) {
    $secret = defined('PETFOOD_HANDOFF_SECRET') ? PETFOOD_HANDOFF_SECRET : getenv('PETFOOD_HANDOFF_SECRET');
    if (empty($secret)) {
        return new \WP_Error('handoff_misconfigured', 'Server handoff secret is not configured in WordPress environment.', ['status' => 500]);
    }

    $timestamp = $request->get_header('x-petfood-timestamp');
    $req_nonce = $request->get_header('x-petfood-nonce');
    $signature = $request->get_header('x-petfood-signature');

    if (empty($timestamp) || empty($req_nonce) || empty($signature)) {
        return new \WP_Error('handoff_missing_auth', 'Missing required authentication headers.', ['status' => 401]);
    }

    // Timestamp window (+/- 120 seconds)
    $now = time();
    $request_time = (int) $timestamp;
    if (abs($now - $request_time) > 120) {
        return new \WP_Error('handoff_timestamp_expired', 'Request timestamp is outside the allowed window.', ['status' => 401]);
    }

    // Replay protection: check transient for nonce
    $nonce_key = 'pf_nonce_' . sanitize_key($req_nonce);
    if (get_transient($nonce_key)) {
        return new \WP_Error('handoff_nonce_replayed', 'Request nonce has already been used.', ['status' => 409]);
    }

    // Compute expected signature: timestamp \n nonce \n hash(raw_body)
    $raw_body = $request->get_body();
    $body_hash = hash('sha256', $raw_body);
    $signing_string = $timestamp . "\n" . $req_nonce . "\n" . $body_hash;
    $expected_signature = hash_hmac('sha256', $signing_string, $secret);

    if (!hash_equals($expected_signature, $signature)) {
        return new \WP_Error('handoff_invalid_signature', 'Invalid HMAC signature.', ['status' => 403]);
    }

    // Store nonce to prevent replay within the timestamp window
    set_transient($nonce_key, 1, 150);

    return true;
}

/**
 * Handle POST /wp-json/petfood/v1/handoffs
 */
function petfood_create_handoff(\WP_REST_Request $request) {
    $params = $request->get_json_params();

    if (empty($params['items']) || !is_array($params['items'])) {
        return new \WP_Error('invalid_payload', 'Payload must contain a non-empty items array.', ['status' => 400]);
    }

    // Limit line items to prevent abuse
    if (count($params['items']) > 50) {
        return new \WP_Error('payload_too_large', 'Cart exceeds maximum line item limit.', ['status' => 400]);
    }

    $validated_items = [];
    foreach ($params['items'] as $item) {
        $id = isset($item['id']) ? absint($item['id']) : 0;
        $qty = isset($item['quantity']) ? absint($item['quantity']) : 0;

        if ($id <= 0 || $qty <= 0 || $qty > 99) {
            return new \WP_Error('invalid_item', 'Line items must have valid positive IDs and quantities (max 99).', ['status' => 400]);
        }

        // Verify product/variation exists and is purchasable
        $product = wc_get_product($id);
        if (!$product || !$product->is_purchasable() || $product->get_status() !== 'publish') {
            return new \WP_Error('item_not_purchasable', sprintf('Item %d is not available or purchasable.', $id), ['status' => 409]);
        }

        $validated_items[] = [
            'id'       => $id,
            'quantity' => $qty,
        ];
    }

    $coupons = [];
    if (!empty($params['coupons']) && is_array($params['coupons'])) {
        foreach ($params['coupons'] as $code) {
            $sanitized = sanitize_text_field(substr($code, 0, 50));
            if (!empty($sanitized)) {
                $coupons[] = $sanitized;
            }
        }
    }

    // Generate high-entropy token
    $token = bin2hex(random_bytes(32));
    $token_hash = hash('sha256', $token);
    $transient_key = 'pf_handoff_' . $token_hash;

    $payload = [
        'schemaVersion' => 1,
        'items'         => $validated_items,
        'coupons'       => $coupons,
        'createdAt'     => time(),
    ];

    // 120-second TTL
    set_transient($transient_key, $payload, 120);

    $handoff_url = add_query_arg(['handoff' => $token], home_url('/cart/handoff/'));

    return new \WP_REST_Response([
        'success'    => true,
        'handoffUrl' => esc_url_raw($handoff_url),
        'expiresIn'  => 120,
    ], 201);
}

/**
 * Register endpoint rewrite for /cart/handoff/
 */
add_action('init', function () {
    add_rewrite_rule('^cart/handoff/?$', 'index.php?petfood_handoff=1', 'top');
});

add_filter('query_vars', function ($vars) {
    $vars[] = 'petfood_handoff';
    return $vars;
});

/**
 * Handle Interstitial Landing and Consumption
 */
add_action('template_redirect', 'petfood_handle_handoff_page');
function petfood_handle_handoff_page() {
    if (get_query_var('petfood_handoff') != '1') {
        return;
    }

    // Prevent caching of this interstitial
    nocache_headers();

    // Check method
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        petfood_consume_handoff_post();
        exit;
    }

    // Render GET interstitial page
    petfood_render_handoff_interstitial();
    exit;
}

/**
 * Render GET interstitial page (does NOT mutate cart or consume token)
 */
function petfood_render_handoff_interstitial() {
    $token = isset($_GET['handoff']) ? sanitize_text_field($_GET['handoff']) : '';
    if (empty($token) || strlen($token) !== 64) {
        wp_die(__('Invalid or missing handoff token.', 'petfood-headless'), __('Invalid Request', 'petfood-headless'), ['response' => 400]);
    }

    $token_hash = hash('sha256', $token);
    $data = get_transient('pf_handoff_' . $token_hash);
    if (!$data) {
        wp_die(__('This checkout session has expired. Please return to the store and try again.', 'petfood-headless'), __('Session Expired', 'petfood-headless'), ['response' => 410]);
    }

    $items_count = count($data['items']);
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="noindex, nofollow, noarchive">
        <title>Preparing your Pet Rasoi Order</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #FAF8F5; color: #1A1A1A; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
            .card { background: #fff; padding: 2.5rem; border-radius: 1rem; box-shadow: 0 4px 20px rgba(0,0,0,0.06); max-width: 440px; width: 100%; text-align: center; border: 1px solid #EADFD6; }
            h1 { font-size: 1.5rem; color: #DE5925; margin-bottom: 0.75rem; }
            p { font-size: 0.95rem; line-height: 1.5; color: #555; margin-bottom: 1.5rem; }
            .btn { background: #DE5925; color: #fff; border: none; padding: 0.85rem 1.75rem; border-radius: 9999px; font-size: 1rem; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; width: 100%; box-sizing: border-box; }
            .btn:hover { background: #C54B1D; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Pet Rasoi Checkout</h1>
            <p>Ready to complete your pet's fresh meal order? Click below to review your cart and proceed to secure checkout.</p>
            <form method="POST" action="">
                <?php wp_nonce_field('petfood_consume_nonce', 'pf_nonce'); ?>
                <input type="hidden" name="handoff_token" value="<?php echo esc_attr($token); ?>" />
                <button type="submit" class="btn">Continue to Checkout (<?php echo (int) $items_count; ?> <?php echo $items_count === 1 ? 'item' : 'items'; ?>) &rarr;</button>
            </form>
        </div>
        <script>
            // Clean token from visible URL history to prevent URL sharing or bookmarking
            if (window.history.replaceState) {
                window.history.replaceState(null, null, window.location.pathname);
            }
        </script>
    </body>
    </html>
    <?php
}

/**
 * Handle POST consumption
 */
function petfood_consume_handoff_post() {
    if (!isset($_POST['pf_nonce']) || !wp_verify_nonce($_POST['pf_nonce'], 'petfood_consume_nonce')) {
        wp_die(__('Security check failed. Please refresh and try again.', 'petfood-headless'), __('Unauthorized', 'petfood-headless'), ['response' => 403]);
    }

    $token = isset($_POST['handoff_token']) ? sanitize_text_field($_POST['handoff_token']) : '';
    if (empty($token) || strlen($token) !== 64) {
        wp_die(__('Invalid handoff token.', 'petfood-headless'), __('Invalid Request', 'petfood-headless'), ['response' => 400]);
    }

    $token_hash = hash('sha256', $token);
    $transient_key = 'pf_handoff_' . $token_hash;
    $data = get_transient($transient_key);

    if (!$data) {
        wp_die(__('This handoff session has expired or has already been used.', 'petfood-headless'), __('Session Expired', 'petfood-headless'), ['response' => 410]);
    }

    // Atomically delete transient so token cannot be replayed
    delete_transient($transient_key);

    // Initialize WC Cart
    if (function_exists('WC') && WC()->cart) {
        WC()->cart->empty_cart();

        foreach ($data['items'] as $item) {
            $product_id = absint($item['id']);
            $quantity = absint($item['quantity']);

            $product = wc_get_product($product_id);
            if ($product && $product->is_purchasable()) {
                if ($product->is_type('variation')) {
                    $parent_id = $product->get_parent_id();
                    WC()->cart->add_to_cart($parent_id, $quantity, $product_id);
                } else {
                    WC()->cart->add_to_cart($product_id, $quantity);
                }
            }
        }

        if (!empty($data['coupons'])) {
            foreach ($data['coupons'] as $code) {
                WC()->cart->apply_coupon($code);
            }
        }

        WC()->cart->calculate_totals();
        wp_safe_redirect(wc_get_checkout_url());
        exit;
    }

    wp_die(__('WooCommerce cart service is currently unavailable.', 'petfood-headless'), __('Error', 'petfood-headless'), ['response' => 503]);
}

