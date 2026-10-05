# Development Nodes

Each node has a dedicated implementation brief. Status belongs in STATUS.md.

| ID | Node | Dependencies | Brief |
|---|---|---|---|
| 00 | Decisions and scope | None | [nodes/N00.md](nodes/N00.md) |
| 01 | Application foundation | 00 | [nodes/N01.md](nodes/N01.md) |
| 02 | Design shell and home | 01 | [nodes/N02.md](nodes/N02.md) |
| 03 | WordPress backend | 01 | [nodes/N03.md](nodes/N03.md) |
| 04 | Catalog and content adapters | 03 | [nodes/N04.md](nodes/N04.md) |
| 05 | Shop and product pages | 02, 04 | [nodes/N05.md](nodes/N05.md) |
| 06 | React cart and shopper sessions | 05 | [nodes/N06.md](nodes/N06.md) |
| 07 | PHP checkout handoff bridge | 03 | [nodes/N07.md](nodes/N07.md) |
| 08 | End-to-end purchase flow | 06, 07 | [nodes/N08.md](nodes/N08.md) |
| 09 | Native account and reorder | 08 | [nodes/N09.md](nodes/N09.md) |
| 10 | CMS, policies and SEO | 04 | [nodes/N10.md](nodes/N10.md) |
| 11 | Launch verification | 08, 09, 10 | [nodes/N11.md](nodes/N11.md) |
| 12 | Subscribe and Save | 11 | [nodes/N12.md](nodes/N12.md) |
| 13 | Opt-in reorder reminders | 11 | [nodes/N13.md](nodes/N13.md) |
| 14 | Pet profiles and preference filters | 09 | [nodes/N14.md](nodes/N14.md) |
