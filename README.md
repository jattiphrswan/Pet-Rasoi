# Pet Rasoi — Fresh & Wholesome Pet Food Ecommerce

A complete implementation for a Next.js React storefront with a WordPress/WooCommerce backend for Pet Rasoi.

## Start here
1. Extract this folder into the project you will open in Antigravity.
2. Read `r.md` (requirements), `a.md` (architecture), `p.md` (plan), then `AGENTS.md`.
3. Paste `ANTIGRAVITY_PROMPT.md` into Antigravity.
4. Build one ready development node at a time. Update `STATUS.md` with actual evidence.
5. Start with demo catalog data; connect a staging WooCommerce installation before checkout work.

## Proposed stack
- React through Next.js App Router, TypeScript and Tailwind CSS.
- Node.js runtime for Next.js server routes. Use a supported active LTS release compatible with the chosen framework; record exact versions and commit the lockfile.
- WordPress + WooCommerce for products, stock, coupons, orders, shipping and checkout.
- A project-specific PHP plugin for pet food metadata and a secure cart-to-checkout handoff.
- WordPress REST API for editorial content; WooCommerce Store API for shopping.
- WordPress MySQL/MariaDB remains the commerce database. Do not add an independent Node product/order database.

## Scope
Launch: responsive home, catalog, filters, product detail, React cart, WooCommerce checkout, WooCommerce customer account, CMS content, policy pages and essential SEO.
Later: subscribe and save, reminder automation, pet profiles and advanced recommendations.

The React cart and WordPress checkout do NOT share a session automatically. Node 08 implements and tests the handoff. Without that passing test, checkout is blocked.

## Document index
| File | Purpose |
|---|---|
| `r.md` | Product requirements and acceptance criteria |
| `a.md` | Architecture, session ownership and project structure |
| `p.md` | Implementation sequence and dependency graph |
| `AGENTS.md` | Coding rules for Antigravity |
| `ANTIGRAVITY_PROMPT.md` | Initial build prompt |
| `NODES.md`, `nodes/` | Development node tasks and completion gates |
| `DESIGN.md` | Design system and page layout |
| `DATA_MODEL.md` | Product fields, taxonomies and content schemas |
| `API_CONTRACTS.md` | API and checkout handoff contracts |
| `WORDPRESS_SETUP.md` | Backend and plugin setup |
| `TESTING.md` | Meaningful integration and acceptance tests |
| `DEPLOYMENT.md` | Staging, release and rollback |
| `OPERATIONS.md` | Fulfilment and email workflows |
| `DECISIONS.md` | Defaults and unresolved business choices |
| `STATUS.md` | Honest progress tracker |
| `.env.example` | Proposed configuration, with placeholders |
| `SOURCES.md` | Official technical references |

## Commands after Antigravity scaffolds the application
These are required script names to create, not commands supported by this docs-only pack today:
```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
npm start
```

Never call a mock checkout or demo order a successful purchase. Never collect live payment details in demo mode.
