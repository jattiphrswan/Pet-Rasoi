# Pet Rasoi — Documentation Index

Welcome to the centralized documentation hub for **Pet Rasoi** (Instant, Ready-to-Serve Wholesome Pet Food).

## 📁 Documentation Structure

```text
docs/
├── architecture/         # System design, data contracts & commerce models
│   ├── a.md              # System architecture, session ownership & data flow
│   ├── API_CONTRACTS.md  # Store API & signed checkout handoff protocol
│   └── DATA_MODEL.md     # Product taxonomies, pet nutrition & metadata schemas
│
├── planning/             # Requirements, roadmap & node status tracking
│   ├── r.md              # Canonical product requirements & acceptance criteria
│   ├── p.md              # Build plan & node dependency graph
│   ├── DECISIONS.md      # Architectural & technical decision logs
│   ├── STATUS.md         # Active development node status & test evidence
│   ├── NODES.md          # Node catalog & completion criteria
│   └── nodes/            # Dedicated briefs for Node 00 through Node 14
│
├── design/               # UI, theme tokens, styling & image standards
│   └── DESIGN.md         # Warm white/cream + soft sage palette, typography & layouts
│
├── backend/              # WooCommerce configuration & operations
│   ├── WORDPRESS_SETUP.md# Headless WordPress & custom PHP plugin guide
│   ├── DEPLOYMENT.md     # Staging, production release & rollback procedures
│   └── OPERATIONS.md     # Fulfillment, lot/batch tracking & transactional email
│
├── testing/              # Validation, automated testing & quality gates
│   └── TESTING.md        # Unit, integration & Playwright E2E test plan
│
└── agents/               # AI pairing guidelines & scaffolding briefs
    ├── AGENTS.md         # Antigravity coding instructions & commerce rules
    ├── ANTIGRAVITY_PROMPT.md # Project inception prompt
    └── SOURCES.md        # Technical references & official API links
```

---

## 🧭 Key References by Role

* **Frontend Developers**: Check [docs/design/DESIGN.md](file:///c:/Users/SkyFish/OneDrive/project/pro-ecom/docs/design/DESIGN.md) for styling tokens and [docs/architecture/DATA_MODEL.md](file:///c:/Users/SkyFish/OneDrive/project/pro-ecom/docs/architecture/DATA_MODEL.md) for product schemas.
* **Backend / WordPress Integrators**: Refer to [docs/backend/WORDPRESS_SETUP.md](file:///c:/Users/SkyFish/OneDrive/project/pro-ecom/docs/backend/WORDPRESS_SETUP.md) and [docs/architecture/API_CONTRACTS.md](file:///c:/Users/SkyFish/OneDrive/project/pro-ecom/docs/architecture/API_CONTRACTS.md) for the secure session handoff.
* **QA & Verification**: Follow [docs/testing/TESTING.md](file:///c:/Users/SkyFish/OneDrive/project/pro-ecom/docs/testing/TESTING.md) and record results in [docs/planning/STATUS.md](file:///c:/Users/SkyFish/OneDrive/project/pro-ecom/docs/planning/STATUS.md).
