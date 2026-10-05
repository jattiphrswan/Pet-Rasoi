# WordPress Setup

## Staging prerequisites
HTTPS staging WordPress, supported WooCommerce, backups, server access for plugin deployment and an isolated sandbox gateway. Record actual versions. Pick public storefront and WordPress commerce hostnames; plugin endpoints and native checkout must remain reachable.

## Configure
1. Set confirmed currency, country, store address, taxes and selling/shipping locations.
2. Enable required guest checkout behavior; configure native cart, checkout and account pages and test permalinks.
3. Set product categories/global attributes and chosen brand taxonomy consistently.
4. Add staging simple/variable products with real IDs, weights, stock, prices and nutrition metadata.
5. Install the project PHP plugin after linting and staging review. It registers metadata, editor controls, validated public nutrition and signed handoff endpoints.
6. Set handoff secret in server environment/wp-config securely, matching Next server config; never commit it.
7. Configure a payment gateway in test mode. Confirm native checkout supports it before adding subscriptions.
8. Configure shipping by destination and actual weight. Do not enable a made-up free-shipping threshold for live orders.
9. Configure authenticated transactional mail; send tests only to approved test inboxes.
10. Exclude cart, checkout, account and handoff from page caching. Verify proxies/CDN honor no-store/private responses.

## Plugin engineering
Prefix functions/classes; guard direct access; validate/sanitize input; escape output; permission callbacks on all endpoints; prepared database statements for custom records; capability checks and nonces for admin changes. Plugin settings must never display secrets to unauthorized users. Migrations are versioned and additive. Do not delete business data on ordinary deactivation.

## Content workflow
Staff edits products/posts/pages in WordPress. React retrieves structured fields; Elementor layouts are not automatically translated. Add dashboard help text for nutrition units and verified claims. Homepage sections must have explicit editable schemas if promised as editable.

## Acceptance
Publish an updated staging product and verify React changes within documented cache interval. Prove draft products stay inaccessible. Verify expired/replayed handoffs fail, native checkout receives variants/coupons, and two browsers never share carts. Export plugin install instructions and list exact configuration keys.
