# Pet Rasoi Headless Commerce Bridge (WordPress Plugin)

This plugin bridges the Pet Rasoi Next.js headless storefront with WordPress & WooCommerce.

## Features
- **Nutritional & Feeding Metadata:** Exposes wholesome ingredients, caloric density, guaranteed nutrient analysis, feeding guidelines, and country of origin on products.
- **Store Manager Admin UI:** Adds a dedicated "Pet Food Nutrition" tab in WooCommerce Product Data for easy staff management.
- **Public REST API:** Exposes published product nutrition data at `/wp-json/petfood/v1/products/{id}/nutrition` with schema validation and draft privacy protection.
- **Signed Checkout Handoff:** Provides server-to-server HMAC-authenticated handoff endpoint `/wp-json/petfood/v1/handoffs` with single-use, 120-second TTL tokens to seamlessly bridge shopper carts into native WooCommerce checkout without exposing private customer sessions or allowing coupon/price manipulation.

## Requirements
- WordPress 6.2+
- WooCommerce 8.0+ (HPOS custom order tables supported)
- PHP 8.0+

## Installation
1. Copy or symlink `wordpress/petfood-headless/` into your staging or production WordPress site's `wp-content/plugins/` directory.
2. In WordPress Admin, navigate to **Plugins > Installed Plugins** and activate **Pet Rasoi Headless Commerce Bridge**.
3. In your `wp-config.php`, configure the shared handoff secret (must match `PETFOOD_HANDOFF_SECRET` in Next.js environment):
   ```php
   define('PETFOOD_HANDOFF_SECRET', 'your_cryptographically_secure_random_string_here');
   ```
4. Flush rewrite rules by visiting **Settings > Permalinks** and clicking "Save Changes".

## Endpoints
- `GET /wp-json/petfood/v1/products/<id>/nutrition`: Public nutrition schema (read-only, cached 60s).
- `POST /wp-json/petfood/v1/handoffs`: Server-to-server handoff creation (requires HMAC headers: `x-petfood-timestamp`, `x-petfood-nonce`, `x-petfood-signature`).
- `GET/POST /cart/handoff/?handoff=<token>`: Interstitial landing page to transfer cart and redirect to native WooCommerce checkout.

