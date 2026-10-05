# API Contracts

These are proposed project-specific contracts. Implement, validate and test them; they are not existing WordPress endpoints.

## Upstream official APIs
WordPress public content: `/wp-json/wp/v2/posts` and `/pages`.
WooCommerce public product/cart API: `/wp-json/wc/store/v1/products` and `/cart` resources. Store API Cart-Token identifies a cart; privileged WooCommerce REST keys do not belong in the browser. Validate actual resource paths and query support against installed versions.

## Next.js shopper routes
| Route | Input | Result |
|---|---|---|
| GET `/api/products` | Whitelisted search/filter/page params | Normalized products plus pagination |
| GET `/api/cart` | Shopper session cookie | Server-authoritative normalized cart |
| POST `/api/cart/items` | product or variation ID, quantity | Updated cart |
| PATCH `/api/cart/items` | line key, quantity | Updated cart |
| DELETE `/api/cart/items` | line key | Updated cart |
| POST `/api/cart/coupons` | code | Updated cart |
| DELETE `/api/cart/coupons` | code | Updated cart |
| POST `/api/checkout/handoff` | Shopper session; no supplied totals | Allowed WordPress navigation URL |

IDs/quantities are validated integers; line keys and coupon strings have length limits. Backend remains final eligibility validator. Require trusted Origin and valid shopper session on mutations; establish session using GET cart. Never expose the encrypted-cookie key or Cart-Token to clients. Do not cache these shopper responses.

## Normalized money
`{minorUnits: string, currency: string, minorUnit: number}`. Preserve integer/minor-unit precision; do not assume 2 decimals. Use Intl for display with validated currency. Keep missing prices distinct from zero. Canonical cart retains subtotal, discount, shipping, tax and total as returned by backend.

## Public PHP metadata endpoint
GET `/wp-json/petfood/v1/products/{id}/nutrition`: published product only, public validated metadata from DATA_MODEL.md. Reject drafts/private products. Schema version in response. No internal supplier costs, batch inventory or customer information.

## Signed handoff creation
POST `/wp-json/petfood/v1/handoffs`, server-to-server only.
Payload: `{schemaVersion: 1, issuedAt, nonce, items: [{id, quantity}], coupons: [code]}`. Items come from fresh backend cart, not browser input. Variation ID is used for variable lines. Native WooCommerce item reconstruction must resolve parent and variation attributes using backend APIs.

Headers: timestamp, random request nonce and HMAC signature over timestamp + newline + nonce + newline + SHA-256 of exact body bytes. Use constant-time verification, bounded timestamp window, request replay protection and payload/line limits. Return a high-entropy opaque handoff code with expiry around 120 seconds. Store only its hash and minimal cart snapshot server-side. The code grants cart reconstruction only, never user authentication. Key rotation is documented and supported.

## Handoff consumption
GET an allowed same-origin WordPress landing endpoint with opaque code; render a no-store interstitial form with an explicit Continue to checkout action. GET does not consume the token or alter cart, so prefetch/link scanners cannot consume it. Strip the code from visible URL with history replacement where possible; use no-referrer and no third-party resources. POST consumes code atomically (transaction or equivalent persistent atomic operation), checks TTL and rebuilds native cart. WordPress nonce on POST complements, rather than replaces, the single-use code.

Revalidate product publication, variation, stock, price and coupons. Replace native cart only after clear shopper confirmation; native cart replacement is the documented launch behavior. Recalculate shipping/taxes under the native session. If lines fail, show actionable review and block silent partial purchase. If successful, redirect to allowlisted native checkout path. No external redirect parameter.

## Limits and error shape
`{code, message, retryable, fieldErrors?}`. 400 malformed, 401/403 session/signature/origin failure, 404 missing/private product, 409 stock/price/replay conflict, 410 expired code, 429 throttled, 502 upstream unavailable. Do not return backend secrets, raw traces or PII. Duplicate consume returns conflict, not a second cart write.

## Explicitly deferred
Customer-auth API, custom React payment API and subscription checkout API. Native account and checkout handle them initially. If safe handoff cannot be implemented on the selected hosting, stop Node 07 and use a fully native WooCommerce cart/checkout alternative with documented frontend scope change; never fake the bridge.
