# Design and UX

## Proposed identity
Brand name Pet Rasoi; focused on instant, ready-to-serve pet food. Clean, premium and friendly aesthetic.
Colors (matched to official Pet Rasoi logo):
- Primary Brand Terracotta: #DE5925 (exact logo circle & "Rasoi" text), deep terracotta #B84315, soft peach tint #FDF2EB
- Warm white & cream backgrounds: base #FAF8F5, surface #F5F0EA, cards #FFFFFF
- Deep readable text: rich charcoal #1A1A1A (matches "Pet" lettering), muted #4E4E4E (matches tagline)
- Warm tan accent: #DCA46A (matches logo divider line)
- Subtle borders: #EADFD6
Validate text/background contrast for accessibility.

## Typography
Polished font pairing:
- Stylish heading font: Elegant serif (Playfair Display) for headlines, section titles and recipe names.
- Clean body font: Readable modern sans-serif (Plus Jakarta Sans / Inter) for UI, navigation, pricing, nutrition and descriptions.
Keep typography consistent, accessible and mobile-friendly.

## Image management and placeholders
Centralized image mapping file (`src/lib/images.ts`). Inspect the `img/` (or `public/img/`) directory for user-provided photography and assets:
- Primary logo: `/img/pet_rasoi_logo_transparent.png`
- Favicon: `/img/pet_rasoi_favicon.png`
- If an image is missing or not yet supplied, display an elegant neutral placeholder with the recipe name and brand mark; do not invent or fabricate artificial product packaging.

## Messaging and product presentation
Highlight convenience, effortless serving (open & serve in seconds), freshness, and verified product information. Do not invent ingredients, preparation instructions, certifications or health claims.

## Header
Logo, ready-to-serve meals, dog/cat categories, search, cart quantity, and transparent serving convenience guide. Mobile menu is keyboard accessible with focus management.

## Home section order
Hero highlighting instant ready-to-serve convenience; easy serving steps (open, pour, nourish); pet category tiles; featured ready-to-serve bowls & broths; verified product data; factual delivery benefits; footer. Show Subscribe & Save only after Node 12 works.

## Product card
Image with dimensions, product name, brand, appropriate price/range, stock status and link. Simple products can use quick add; variable products must open a variation picker or detail page. Never guess a default variation.

## Shop
Desktop sidebar; mobile filter drawer with clear/apply and active-filter count. URL preserves filters, sort and pagination. Result count comes from backend, not the number of cards on the current page. Filtering reflects actual data capabilities in the adapter.

## Product detail
Gallery, name, brand, review summary only when real, price, package size, quantity, stock, add-to-cart. Nutrition and feeding sections below. Show calories with their specific unit. Distinguish minimum/maximum guaranteed analysis values. Feeding guidance is supplier information; avoid diagnosis or treatment claims.

## Cart/checkout
Editable line quantities, variant/weight, removal, coupons, authoritative subtotal and total components. Label shipping/tax as estimated or unavailable until applicable address calculation. Clear change notifications if price or stock updates. Hosted checkout should use similar branding and prominent return-to-store navigation.

## Responsive/accessibility
Verify 360, 390, 768 and 1440 px. No horizontal overflow. Comfortable touch controls around 44 px where practical. Native semantic elements, focus outlines, form errors next to fields and live announcements for cart changes. Honor reduced-motion preferences. Reserve image space and avoid unnecessary carousels/video.
