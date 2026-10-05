# Requirements

## Goal and boundaries
Sell instant, ready-to-serve packaged pet food with clear nutrition information, trustworthy product data and easy repeat purchases. Emphasize convenience, effortless serving (open and serve), fresh wholesome ingredients and verified product details. Never invent ingredients, preparation instructions, certifications or health claims. Phase 1 supports an inventory-based retail workflow as a provisional assumption; stock ownership must be confirmed before live launch. Brand name: Pet Rasoi.

Country, currency, shipping zones, taxation, legal text, provider, domain, catalog and supplier certifications remain business decisions. Do not silently default the real store to US or India. Demo configuration may use clearly labelled sample INR prices; live amounts and currency always come from WooCommerce.

## Users
- Shopper: browse, search, compare diet attributes, purchase and reorder.
- Store manager: edit products and content, stock, coupons, orders and shipment information in WordPress.
- Returning customer: use the native WooCommerce account for orders and addresses at launch.

## Functional requirements
| ID | Requirement | Acceptance |
|---|---|---|
| R01 | Responsive home | Categories, real catalog links, featured products, brand section, newsletter and footer work at 360 px and desktop |
| R02 | Shop and search | Search products by name; combine pet, brand, life stage, size, diet, price and stock filters; pagination and URL state work |
| R03 | Product detail | Real SKU, price, currency, stock, variation selection, weight, ingredients, analysis, calories and feeding table; absent fields omitted |
| R04 | Cart | Add/update/remove, persist per browser, handle variants, coupons, server totals and stock changes |
| R05 | Checkout | Native WooCommerce checkout receives matching cart and coupons; supported shipping and sandbox payment tested |
| R06 | Accounts | Secure link to WooCommerce login/account; authorized order history, addresses and password reset work |
| R07 | Content | WordPress blog index/detail, about, contact, FAQ and policy content with sanitized rendering |
| R08 | Stock correctness | Out-of-stock purchases prevented; expired quote and changed prices handled; backend owns all calculations |
| R09 | Reorder | Use native WooCommerce reorder workflow if available and verified; revalidate unavailable products and current prices |
| R10 | Email | Actual transactional order emails delivered from verified configuration; newsletter consent recorded separately |
| R11 | SEO | Canonical routes, metadata, sitemap, robots, valid product/article structured data and useful 404s |
| R12 | Accessibility | Keyboard navigation, visible focus, labelled fields, meaningful alt text and accessible dialogs |

## Pages and routes
`/`, `/shop`, `/shop?pet=dog`, `/shop?pet=cat`, `/products/[slug]`, `/cart`, `/checkout`, `/account`, `/blog`, `/blog/[slug]`, `/about`, `/contact`, `/faq`, `/shipping-returns`, `/privacy`, `/terms`.

`/checkout` initiates secure handoff, not a cosmetic checkout form. `/account` links or redirects to native WooCommerce account without pretending the shopper is logged in on React. Implement account-based React features only after a separate authentication design.

## Later requirements
- R13 Subscriptions: server-managed plan, supported recurring gateway, renewal, cancellation, pause and failed-payment handling.
- R14 Reminders: explicit opt-in and configurable cadence. A 25-day reminder is a business default, not a reliable depletion estimate.
- R15 Pet profiles: pet species, age, weight, diet preferences with authorized account access and deletion.
- R16 Autoship estimate: distinguish billing, dispatch and estimated delivery dates; never promise unsupported dates.

## Quality requirements
- Product pages render meaningful server content; add-to-cart only uses confirmed purchasable variation IDs.
- Clear loading, empty, error and offline states; never convert API failure into a fake successful order.
- Aim for LCP <= 2.5 s, INP <= 200 ms and CLS <= 0.1; measure rather than guarantee.
- No WooCommerce privileged credentials, signing secrets or customer data exposed in browser bundles or logs.
- Private cart and checkout responses never shared-cache. Prevent duplicate order creation on retries.

## Exclusions at launch
Marketplace sellers, raw food cold chain, prescription diet approval, loyalty points, custom React payment UI, unverified subscription compatibility and AI medical advice.
