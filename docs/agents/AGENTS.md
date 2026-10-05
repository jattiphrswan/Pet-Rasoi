# Antigravity Agent Instructions

## Objective
Implement the project described in r.md, a.md and p.md. These are the canonical requirements, architecture and plan. Use nodes/ for execution detail. Resolve conflicts by recording the choice in DECISIONS.md; preserve explicit user instructions.

## Work style
- Work one development node at a time; use prompt → implement → test → fix loops.
- Never mark a node PASS based only on code generation or screenshots.
- Short readable React components, reusable mapped grids, no huge one-file application and no long unreadable JSX lines.
- TypeScript types and runtime schemas at external data boundaries.
- Prefer established framework features and official backend APIs over custom frameworks.
- Do not spawn additional agents unless the user explicitly asks for delegation.
- Do not purchase services, send marketing messages or deploy production unless instructed.
- Read existing project instructions and inspect the repository before scaffolding over anything.

## Commerce rules
Backend calculates all prices, stock, coupons, shipping and taxes. Browser data is untrusted. WooCommerce administrative keys are server-only. Never prefix secrets with NEXT_PUBLIC_. Do not disable nonce/security validation to make cart requests work. Never grant account access based on an order ID or email alone.

## UI rules
Mobile first, green/cream provisional theme, real product imagery when supplied, visible focus, accessible controls, loading/empty/error states. No fabricated reviews, certifications, supplier claims or medical advice. Clearly label demo data. No dead buttons: implement behavior, explain unavailable action, or omit the control.

## Testing and status
Create meaningful tests for normalization, variations, sessions and handoff; integration tests for commerce; Playwright critical flows. Do not add tests that only mirror constants or implementation. Required app scripts: dev, build, start, lint, typecheck, test, test:e2e. Choose commands compatible with installed versions.

At each node, report implementation, validation and limits, then update STATUS.md. Stop dependent work for a real missing dependency while continuing independent work. Never say production-ready while payment, tax, shipping, email or security validation remains untested.
