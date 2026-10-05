# Validation Plan

## Required checks
Run lint, TypeScript checks, focused automated tests and production build. Record actual commands and versions. Playwright runs against an isolated staging backend for integration flows; fixtures must not touch real customers or live charges.

## Unit tests worth maintaining
Money normalization across currencies/minor units; missing vs zero price; variation eligibility; filter query allowlist; nutrition schema validation; sanitized content; handoff signature and expiry; payload limits. Avoid tests that merely copy strings or constants.

## Integration cases
| Case | Expected |
|---|---|
| Shopper A and B carts | Isolated tokens and no data leakage |
| Reload | Correct cart persists for same shopper |
| Variant size add | Correct variation ID and package size |
| Combined filters and page | Correct backend count, URL survives reload |
| Invalid/expired coupon | Clear error, accurate cart remains |
| Stock drops after add | Checkout/cart updates and blocks excess |
| Price changes | Refreshed authoritative totals displayed |
| Backend unavailable | Error/retry state; no fake success |
| Handoff expired/replayed/tampered | Rejected without replacing native cart |
| GET scanner/prefetch | No token consumption or cart mutation |
| Existing native cart | Clear replacement confirmation |
| Handoff complete | Matching lines, variations and eligible coupons |
| Failed handoff line | Review shown; no silent partial purchase |
| Native sandbox payment success | Matching order and verified backend state |
| Payment failure/cancel | Recoverable flow, no false paid status |
| Confirmation URL tampered | Does not clear cart or authorize order access |
| Account order request | Native authentication and correct customer only |
| Draft/private product | Not exposed through public endpoints |

## UI and SEO
360/390/768/1440 px, keyboard menu and filter drawer, dialog focus, empty results, long titles, missing images, no overflow. Verify canonical URLs, sitemap, metadata, product structured data using actual catalog values, real 404 status and staging noindex. Measure Lighthouse as a lab check; field Core Web Vitals need real traffic.

## Optional retention tests
Subscription renewal and gateway webhook deduplication; cancel/pause/failed payment; opt-out reminders and cancellation suppression; pet profile authorization. These tests belong to later nodes, not launch PASS.

## Evidence
For each node: changed files, commands, exit codes, relevant screenshot or test report and backend order ID where needed. Mask customer data and secrets. Distinguish PASS, FAIL, BLOCKED and NOT STARTED. A skipped check is not PASS.
