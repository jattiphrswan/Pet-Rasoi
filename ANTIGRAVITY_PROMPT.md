# Paste this into Antigravity

Build a complete pet food ecommerce project using this document pack.

Read README.md, AGENTS.md, r.md, a.md, p.md, NODES.md and DECISIONS.md before coding. Inspect the existing repository first. Use React through Next.js App Router with TypeScript and Tailwind CSS. Use a supported Node.js runtime compatible with the installed Next.js release. WordPress + WooCommerce is the backend and commerce source of truth; write the required WordPress integration plugin in PHP.

Build mobile-first pages with a provisional forest-green and cream design, clear navigation, reusable components and product grids rendered from arrays. Include home, shop, combined filters, search, product detail, variation selection, cart, secure native WooCommerce checkout handoff, native account links, blog, FAQ, contact and editable policy pages. All buttons need real behavior and all API views need loading, empty and error states.

Start in explicitly labelled demo mode if WordPress credentials are unavailable. Do not call demo purchases real. Keep country, currency, shipping policy, provider and brand configurable. Use WooCommerce price/currency/stock as authoritative in live mode. Omit missing nutrition fields and unsupported certifications.

Follow the node dependency graph. Start at Node 00 and continue through ready nodes without stopping for routine design choices. Complete each node with plan → implement → test → fix. Update STATUS.md with evidence and actual commands. If external configuration is missing, mark affected nodes BLOCKED and keep working on independent nodes. Do not mark integration nodes PASS with mocks.

Pay special attention to cart isolation and the React-to-WordPress session handoff in API_CONTRACTS.md. Cart-Token does not automatically populate native checkout. Implement a signed short-lived single-use server handoff and test it on actual staging WooCommerce. Keep privileged credentials server-only. Never weaken backend validation or use client-calculated order totals.

Finish Phase 1 before implementing subscriptions, marketing reminders or pet profiles. Scaffold runnable scripts, lock dependencies, create .env.example, document WordPress plugin installation and deployment. Run lint, typecheck, meaningful tests and production build. Show remaining configuration and failed checks honestly. Do not publish production or send real customer email during development.
