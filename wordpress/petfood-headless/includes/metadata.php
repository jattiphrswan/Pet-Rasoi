<?php
/**
 * Pet Rasoi Product Metadata Registration & Admin UI
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register post meta for products
 */
add_action('init', 'petfood_register_product_metadata');
function petfood_register_product_metadata() {
    $meta_keys = [
        'petfood_ingredients' => [
            'type'         => 'string',
            'description'  => 'Comma-separated or list of natural ingredients',
            'single'       => true,
            'show_in_rest' => true,
        ],
        'petfood_analysis' => [
            'type'         => 'string', // Stored as JSON or serialized array
            'description'  => 'Guaranteed nutrient analysis JSON',
            'single'       => true,
            'show_in_rest' => true,
        ],
        'petfood_calories' => [
            'type'         => 'string',
            'description'  => 'Caloric density value and unit',
            'single'       => true,
            'show_in_rest' => true,
        ],
        'petfood_feeding_rows' => [
            'type'         => 'string',
            'description'  => 'Daily feeding guideline matrix JSON',
            'single'       => true,
            'show_in_rest' => true,
        ],
        'petfood_storage' => [
            'type'         => 'string',
            'description'  => 'Pantry/refrigeration storage instructions',
            'single'       => true,
            'show_in_rest' => true,
        ],
        'petfood_origin' => [
            'type'         => 'string',
            'description'  => 'Verified country of manufacture',
            'single'       => true,
            'show_in_rest' => true,
        ],
        'petfood_certifications' => [
            'type'         => 'string',
            'description'  => 'JSON verified certifications and standards',
            'single'       => true,
            'show_in_rest' => true,
        ],
    ];

    foreach ($meta_keys as $key => $args) {
        register_post_meta('product', $key, [
            'show_in_rest'      => $args['show_in_rest'],
            'single'            => $args['single'],
            'type'              => $args['type'],
            'description'       => $args['description'],
            'auth_callback'     => function () {
                return current_user_can('edit_posts');
            },
            'sanitize_callback' => 'sanitize_text_field',
        ]);
    }
}

/**
 * Add Pet Nutrition tab to WooCommerce product data tabs
 */
add_filter('woocommerce_product_data_tabs', 'petfood_add_product_data_tab');
function petfood_add_product_data_tab($tabs) {
    $tabs['petfood_nutrition'] = [
        'label'    => __('Pet Food Nutrition', 'petfood-headless'),
        'target'   => 'petfood_nutrition_product_data',
        'class'    => ['show_if_simple', 'show_if_variable'],
        'priority' => 60,
    ];
    return $tabs;
}

/**
 * Render WooCommerce product data panel
 */
add_action('woocommerce_product_data_panels', 'petfood_render_product_data_panel');
function petfood_render_product_data_panel() {
    global $post;
    ?>
    <div id="petfood_nutrition_product_data" class="panel woocommerce_options_panel hidden">
        <div class="options_group">
            <p class="form-field">
                <label for="petfood_origin"><?php _e('Country of Origin', 'petfood-headless'); ?></label>
                <input type="text" id="petfood_origin" name="petfood_origin" value="<?php echo esc_attr(get_post_meta($post->ID, 'petfood_origin', true)); ?>" placeholder="e.g. India" class="short" />
                <span class="description"><?php _e('Verified country where this product is manufactured and packaged.', 'petfood-headless'); ?></span>
            </p>
            <p class="form-field">
                <label for="petfood_calories"><?php _e('Caloric Density', 'petfood-headless'); ?></label>
                <input type="text" id="petfood_calories" name="petfood_calories" value="<?php echo esc_attr(get_post_meta($post->ID, 'petfood_calories', true)); ?>" placeholder="e.g. 1180 kcal/kg" class="short" />
                <span class="description"><?php _e('Include numerical value and unit (kcal/kg or kcal/cup).', 'petfood-headless'); ?></span>
            </p>
            <p class="form-field">
                <label for="petfood_storage"><?php _e('Storage Instructions', 'petfood-headless'); ?></label>
                <input type="text" id="petfood_storage" name="petfood_storage" value="<?php echo esc_attr(get_post_meta($post->ID, 'petfood_storage', true)); ?>" placeholder="e.g. Store in a cool dry place. Refrigerate after opening and consume within 48h." class="widefat" />
            </p>
            <p class="form-field">
                <label for="petfood_ingredients"><?php _e('Wholesome Ingredients', 'petfood-headless'); ?></label>
                <textarea id="petfood_ingredients" name="petfood_ingredients" rows="3" class="widefat" placeholder="e.g. Fresh Chicken, Brown Rice, Carrots, Spinach, Pumpkin, Cold-Pressed Flaxseed Oil"><?php echo esc_textarea(get_post_meta($post->ID, 'petfood_ingredients', true)); ?></textarea>
                <span class="description"><?php _e('Clean ingredient declaration shown to shoppers.', 'petfood-headless'); ?></span>
            </p>
            <p class="form-field">
                <label for="petfood_analysis"><?php _e('Guaranteed Analysis (JSON)', 'petfood-headless'); ?></label>
                <textarea id="petfood_analysis" name="petfood_analysis" rows="4" class="widefat" placeholder='[{"nutrient":"Crude Protein","value":12,"unit":"%","qualifier":"min"},{"nutrient":"Crude Fat","value":7,"unit":"%","qualifier":"min"}]'><?php echo esc_textarea(get_post_meta($post->ID, 'petfood_analysis', true)); ?></textarea>
                <span class="description"><?php _e('Nutrient analysis records (Array of {nutrient, value, unit, qualifier}).', 'petfood-headless'); ?></span>
            </p>
            <p class="form-field">
                <label for="petfood_feeding_rows"><?php _e('Feeding Guide (JSON)', 'petfood-headless'); ?></label>
                <textarea id="petfood_feeding_rows" name="petfood_feeding_rows" rows="4" class="widefat" placeholder='[{"weightMinKg":1,"weightMaxKg":5,"dailyGrams":100,"frequency":"2 meals/day"}]'><?php echo esc_textarea(get_post_meta($post->ID, 'petfood_feeding_rows', true)); ?></textarea>
                <span class="description"><?php _e('Weight brackets and daily serving portions.', 'petfood-headless'); ?></span>
            </p>
        </div>
    </div>
    <?php
}

/**
 * Save custom product metadata
 */
add_action('woocommerce_process_product_meta', 'petfood_save_product_data');
function petfood_save_product_data($post_id) {
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = [
        'petfood_origin'       => 'sanitize_text_field',
        'petfood_calories'     => 'sanitize_text_field',
        'petfood_storage'      => 'sanitize_text_field',
        'petfood_ingredients'  => 'sanitize_textarea_field',
        'petfood_analysis'     => 'sanitize_textarea_field',
        'petfood_feeding_rows' => 'sanitize_textarea_field',
    ];

    foreach ($fields as $field => $sanitizer) {
        if (isset($_POST[$field])) {
            $val = call_user_func($sanitizer, wp_unslash($_POST[$field]));
            update_post_meta($post_id, $field, $val);
        }
    }
}

