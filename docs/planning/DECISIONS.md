# Decisions and Open Inputs

## Adopted defaults for development
| Decision | Default |
|---|---|
| Frontend | React through Next.js, TypeScript, Tailwind |
| Commerce backend | WordPress + WooCommerce |
| Database | Existing WordPress database; no duplicate Node commerce DB |
| Checkout | Native WooCommerce with explicit secure cart handoff |
| Accounts | Native WooCommerce; no custom React customer authentication at launch |
| Inventory model | Inventory-based ready-to-serve packaged pet food |
| Visual direction | Light & elegant: warm terracotta orange (#DE5925) matching official logo, warm cream (#FAF8F5), rich charcoal (#1A1A1A), subtle warm borders (#EADFD6) |
| Typography | Stylish serif headings (Playfair Display) + clean sans body (Plus Jakarta Sans) |
| Image system | Centralized image mapping in src/lib/images.ts using public/img/ and neutral placeholders |
| Brand | Pet Rasoi |
| Demo | Labelled sample data, commerce disabled |
| Currency | Live WooCommerce setting; sample INR only in demo |
| Subscription timing | After launch essentials pass |

## Required before production
Country/currency, brand/logo/domain, supplier/catalog/images, inventory model, payment provider, delivery zones/rates, tax handling, policies, verified nutrition/certifications, email sender/integration, hosting credentials and launch authorization.

## Technical decisions at implementation
Record exact runtime/framework/plugin versions; session encryption or TTL store; query support for product filters; atomic handoff storage; rate-limiting mechanism; image host allowlist; cache TTL/invalidation; native reorder support.

## Decision record template
Date; question; decision; reason; affected files/nodes; validation evidence; remaining risk. Change architecture deliberately rather than silently introducing a separate database or unsupported headless gateway.
