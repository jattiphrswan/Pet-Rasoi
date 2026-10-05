# Deployment and Rollback

## Environments
Demo local: labelled fictional data, commerce disabled.
Staging: dedicated WooCommerce staging catalog, sandbox gateway, test emails and noindex.
Production: confirmed domains/config, real catalog and live gateway only after launch checks.

## Frontend hosting
Deploy Next.js to a host supporting its Node runtime/server routes. This architecture is not a static GitHub Pages export. Set supported Node/framework versions and lockfile. Keep public storefront URL separate from private WooCommerce configuration. Configure backend hostname allowlist and HTTPS image sources.

## Environment policy
Use .env.example for names only; secrets in host runtime configuration. Do not log credentials. NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_DATA_MODE are browser-readable; all WooCommerce signing/session keys are private. Changing NEXT_PUBLIC values may require rebuild.

## Release checklist
- Country, currency, brand, legal text, supplier data and shipping policies confirmed.
- Active catalog includes accurate weights and taxes; demo products removed.
- Nodes 00–11 PASS with staging integration evidence.
- Sandbox purchase, order emails and order handling verified.
- Production credentials set by authorized operator; no copied staging customer data.
- TLS, redirects, WordPress URLs, native checkout/account branding and allowlists correct.
- Cache exclusions active; noindex removed from storefront after release while duplicate commerce content handled deliberately.
- Backups and monitoring ready; alert on handoff/cart failures and payment webhook errors without logging PII.

## Release process
Record frontend commit, dependency lockfile and plugin version. Back up production WordPress before plugin migrations. Deploy compatible plugin first, smoke-test signed handoff, then release frontend. Verify a permitted test order under the chosen production procedure; do not initiate a real charge without authorization.

## Rollback
Redeploy prior frontend and compatible plugin version. Stop new checkout handoffs if security or data mismatch appears. Preserve existing orders, payments and inventory; do not restore the entire database over new orders. Roll back migrations only using a reviewed data-safe migration. Document incident and reconcile gateway orders before resuming.
