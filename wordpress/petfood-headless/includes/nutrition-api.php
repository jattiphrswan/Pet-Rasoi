<?php
/**
 * Pet Rasoi Public Nutrition REST API Endpoint
 * Exposes validated nutrition, feeding guide, and ingredients for published products.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route('petfood/v1', '/products/(?P<id>\d+)/nutrition', [
        'methods'             => \WP_REST_Server::READABLE,
        'callback'            => 'petfood_get_product_nutrition',
        'permission_callback' => '__return_true', // Public catalog endpoint
        'args'                => [
            'id' => [
                'validate_callback' => function ($param) {
                    return is_numeric($param) && intval($param) > 0;
                },
                'sanitize_callback' => 'absint',
            ],
        ],
    ]);
});

/**
 * Handle GET /wp-json/petfood/v1/products/{id}/nutrition
 */
function petfood_get_product_nutrition(\WP_REST_Request $request) {
    $product_id = $request->get_param('id');
    $post = get_post($product_id);

    // Validate product existence and type
    if (!$post || !in_array($post->post_type, ['product', 'product_variation'], true)) {
        return new \WP_Error(
            'petfood_product_not_found',
            __('Product not found.', 'petfood-headless'),
            ['status' => 404]
        );
    }

    // Protect drafts, trash, private, or password-protected products
    if ($post->post_status !== 'publish' || !empty($post->post_password)) {
        return new \WP_Error(
            'petfood_product_unavailable',
            __('Product is not published or publicly accessible.', 'petfood-headless'),
            ['status' => 404]
        );
    }

    // Retrieve metadata
    $raw_ingredients = get_post_meta($product_id, 'petfood_ingredients', true);
    $raw_analysis    = get_post_meta($product_id, 'petfood_analysis', true);
    $raw_calories    = get_post_meta($product_id, 'petfood_calories', true);
    $raw_feeding     = get_post_meta($product_id, 'petfood_feeding_rows', true);
    $storage         = get_post_meta($product_id, 'petfood_storage', true);
    $origin          = get_post_meta($product_id, 'petfood_origin', true);
    $certifications  = get_post_meta($product_id, 'petfood_certifications', true);

    // Parse ingredients into array
    $ingredients = [];
    if (!empty($raw_ingredients)) {
        $ingredients = array_values(array_filter(array_map('trim', explode(',', $raw_ingredients))));
    }

    // Parse JSON fields safely
    $analysis = !empty($raw_analysis) ? json_decode($raw_analysis, true) : [];
    if (!is_array($analysis)) {
        $analysis = [];
    }

    $feeding_guide = !empty($raw_feeding) ? json_decode($raw_feeding, true) : [];
    if (!is_array($feeding_guide)) {
        $feeding_guide = [];
    }

    $parsed_certifications = !empty($certifications) ? json_decode($certifications, true) : [];
    if (!is_array($parsed_certifications)) {
        $parsed_certifications = [];
    }

    // Response structure
    $response_data = [
        'schemaVersion'        => 1,
        'productId'            => (int) $product_id,
        'ingredients'          => $ingredients,
        'analysis'             => $analysis,
        'calories'             => !empty($raw_calories) ? [
            'value' => (float) filter_var($raw_calories, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION),
            'unit'  => stripos($raw_calories, 'cup') !== false ? 'kcal/cup' : 'kcal/kg',
        ] : null,
        'feedingGuide'         => $feeding_guide,
        'storageInstructions'  => !empty($storage) ? $storage : null,
        'countryOfOrigin'      => !empty($origin) ? $origin : 'India',
        'certifications'       => $parsed_certifications,
    ];

    $response = new \WP_REST_Response($response_data, 200);
    // Allow public caching for 60 seconds
    $response->header('Cache-Control', 'public, max-age=60');
    return $response;
}

