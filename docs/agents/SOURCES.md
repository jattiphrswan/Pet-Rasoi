# Official Implementation References

Checked 2026-10-05. Re-check against the exact versions selected by Antigravity. These sources describe official functionality; the handoff API in this pack is a proposed custom integration.

- WooCommerce Store API: https://developer.woocommerce.com/docs/apis/store-api/
- Cart tokens: https://developer.woocommerce.com/docs/apis/store-api/cart-tokens/
- Checkout API: https://developer.woocommerce.com/docs/apis/store-api/resources-endpoints/checkout/
- Cart API: https://developer.woocommerce.com/docs/apis/store-api/resources-endpoints/cart/
- Next.js environment variables: https://nextjs.org/docs/pages/guides/environment-variables
- Next.js current source guidance: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/environment-variables.mdx

Store API supports public shopping operations. Cart tokens identify headless carts. NEXT_PUBLIC variables are exposed to the browser. The project uses these principles while adding its own session proxy and native-checkout bridge.
