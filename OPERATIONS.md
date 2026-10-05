# Store Operations

## Before selling
Confirm supplier terms, product sourcing, authenticity, inventory ownership, storage, recalls and local rules. Decide inventory/dropshipping/private label; this pack does not certify a supplier or food product.

## Fulfilment
Use actual bag weights/dimensions and destination rates. Free shipping threshold follows margin calculations. Batch tracking and FEFO require a selected operational process or extension, not just WooCommerce stock. Track returns/refunds and avoid reselling compromised food.

## Emails
Transactional order confirmations stay in WooCommerce. Newsletter, abandoned-cart and reminder automation require appropriate consent and selected integration. Development only records events/test delivery; do not send real campaigns. Suppress reminders for cancelled/refunded orders as appropriate, honor opt-out, and prevent duplicate sends.

## Reorder/reminders
Native reorder revalidates current price/stock. A simple configurable reminder is allowed after Node 13, but must not claim exact food depletion. Later estimator uses quantity and supplied daily feeding rate; explicitly labelled estimate.

## Subscriptions
Only launch after chosen extension/provider handles recurring collection, renewal orders, stock, fulfilment, customer management and failed payments in staging. Native subscription management at launch extension stage reduces need for a separate React auth system. Discount percentage is a configurable business decision.

## Content and trust
No invented vet approval, organic certificates, origin badges or testimonials. Product claims follow verified supplier content. Nutritional editorial content must be reviewed by a qualified person where appropriate; the store does not prescribe treatment.

## Measurement
Track product view, add to cart, checkout initiation and purchase with documented definitions. Purchase fires only from trustworthy confirmed order integration, deduplicated by order identifier. Never publish email, phone or address in analytics. Verify attribution across storefront/commerce hostnames under the chosen consent policy.
