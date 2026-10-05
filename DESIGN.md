# Design and UX

## Proposed identity
Brand name Pet Rasoi; change from a central configuration. Provisional colors: forest #174B35, leaf #4D7C42, cream #F8F7F0, ink #192A22, accent #EAC46B. Validate actual text/background contrast; do not assume every combination is accessible. Use a clean sans-serif, restrained radius, generous spacing and clear headings. No emojis or decorative AI motifs.

## Header
Logo, dog/cat/shop categories, search, blog, account link and cart quantity. Mobile menu is keyboard accessible with focus management. Search supports submit, clear and meaningful no-results feedback.

## Home section order
Hero with one primary shop CTA; pet category tiles; featured real products; shop by life stage; verified brands; factual delivery/returns benefits; nutrition guide links; newsletter; footer. Show Subscribe & Save only after Node 12 works.

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
