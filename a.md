# Architecture

## Decisions
React runs in Next.js; Node.js provides the rendering runtime and controlled server routes. WordPress/WooCommerce remains the only authoritative commerce backend. Build a thin adapter layer, not another ecommerce engine.

## Boundaries
| Layer | Responsibility |
|---|---|
| Server-rendered React | Catalog and content routes, metadata, normalized public data |
| Client React | Filter controls, variation picker, cart interactions and accessible dialogs |
| Next.js server routes | Shopper-bound Store API proxy, handoff creation, input validation and origin checks |
| WooCommerce | Product eligibility, tax, shipping, discounts, prices, stock, order and payment state |
| PHP integration plugin | Public pet metadata and signed, short-lived checkout handoff |
| Native WP checkout/account | Gateway UI, account authentication, order history and subscriptions later |

## Cart lifecycle
1. Next `/api/cart` initializes a Store API cart and captures its Cart-Token server-side.
2. Store it encrypted in an HttpOnly, Secure, SameSite=Lax shopper cookie, or in a TTL server session store selected at Node 06. Never use an unencrypted token or log it.
3. Forward that token for Store API cart operations. Do not rely on cross-domain browser cookies.
4. Return a normalized cart to React. Server totals are authoritative.
5. On checkout, POST to Next `/api/checkout/handoff`. Validate origin and shopper cookie, request fresh cart, obtain a short-lived single-use handoff from the PHP plugin.
6. Browser navigates to the WordPress consume endpoint. Plugin rebuilds the native WooCommerce cart from server-held line items and coupon codes, recalculates and redirects to native checkout.
7. If eligibility or total changes, show the updated native cart and ask the shopper to review it before paying.

Do not assert Store API token possession creates the native WordPress session. The explicit handoff bridges these different sessions. Exact PHP hooks and supported APIs must be verified against the installed WooCommerce release. Signed cart handoff never grants account login.

## Checkout behavior
Guest checkout at launch; native login optional. WordPress generates authoritative order confirmation. Provide a store link back to React. Keep React cart when navigation begins; clear it only after a trusted server verification of completed/accepted order or explicit shopper action. Never treat a client return query parameter as proof of payment.

## Suggested tree after implementation
```text
src/
  app/
    (store)/
    api/cart/route.ts
    api/cart/items/route.ts
    api/cart/coupons/route.ts
    api/checkout/handoff/route.ts
  components/{layout,product,cart,ui}/
  lib/{commerce,wordpress,security,seo}/
  types/
  data/demo/
wordpress/petfood-headless/
  petfood-headless.php
  includes/{metadata,handoff,settings}.php
tests/{unit,integration,e2e}/
docs/
```

## Data and caching
Cache public catalog/editorial data with configurable short TTL and an optional authenticated invalidation endpoint. Price/stock revalidated at cart operations and checkout. Cart/handoff/account routes: dynamic, no-store, private. No module-level shopper token or singleton mutable cart. Sanitize rich text before React rendering. Normalize API payloads centrally with schema validation.

## Failure and security handling
Use timeouts, actionable error messages and controlled retry only for safe reads. Handle 401/403/404/409/429/5xx explicitly. Reject external redirect targets, user-supplied API hosts and malformed IDs. Origin-check state-changing browser routes; rate-limit handoff and contact submissions. Encryption key rotation must safely expire old sessions. Store secrets only in server runtime config.
