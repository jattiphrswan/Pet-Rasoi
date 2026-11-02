<?php
/**
 * Plugin Name: Pet Rasoi Headless Commerce Bridge
 * Plugin URI:  https://petrasoi.com
 * Description: Official headless e-commerce bridge for Pet Rasoi. Exposes pet food nutrition metadata and provides secure HMAC-signed cart checkout handoffs.
 * Version:     1.0.0
 * Author:      Pet Rasoi Engineering
 * Author URI:  https://petrasoi.com
 * License:     GPL-2.0-or-later
 * Requires at least: 6.2
 * Requires PHP: 8.0
 * WC requires at least: 8.0
 * WC tested up to: 9.2
 */

if (!defined('ABSPATH')) {
    exit;
}

define('PETFOOD_HEADLESS_VERSION', '1.0.0');
define('PETFOOD_HEADLESS_DIR', plugin_dir_path(__FILE__));
define('PETFOOD_HEADLESS_URL', plugin_dir_url(__FILE__));

// Require submodules
require_once PETFOOD_HEADLESS_DIR . 'includes/metadata.php';
require_once PETFOOD_HEADLESS_DIR . 'includes/nutrition-api.php';
require_once PETFOOD_HEADLESS_DIR . 'includes/handoff.php';

// Declare HPOS compatibility for WooCommerce
add_action('before_woocommerce_init', function () {
    if (class_exists(\Automattic\WooCommerce\Utilities\FeaturesUtil::class)) {
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility(
            'custom_order_tables',
            __FILE__,
            true
        );
    }
});

