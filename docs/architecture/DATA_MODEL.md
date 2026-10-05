# Data Model

## WooCommerce authoritative fields
Product ID, slug, SKU, type, publication status, title, descriptions, price, currency, images, purchasability, stock/backorders, categories, attributes, shipping weight and dimensions. Variations own actual purchasable IDs, attribute values, price and stock. Resolve simple and variable behavior explicitly.

## Product taxonomy plan
| Dimension | Storage | Examples |
|---|---|---|
| Pet | Product category or validated public taxonomy | dog, cat, bird |
| Brand | Consistent brand taxonomy chosen from installed backend | supplier brands |
| Life stage | Global product attribute | puppy-kitten, adult, senior |
| Breed size | Global product attribute | small, medium, large, all |
| Diet | Global product attribute | sensitive-stomach, weight-management |
| Food type | Global product attribute | dry, wet, treats |
| Pack size | Variation attribute | 1 kg, 3 kg, 10 kg |

Avoid duplicate brand taxonomies. Map backend IDs to frontend slugs in one adapter. Only expose filters supported by the implemented query path; custom taxonomy query support may require a plugin extension.

## Pet food metadata, namespaced keys
- `petfood_ingredients`: supplier ingredient text.
- `petfood_analysis`: array of {nutrient, value, unit, qualifier}; qualifier is minimum/maximum/typical as supplied.
- `petfood_calories`: {value, unit}; units include kcal/kg or kcal/cup, never interchangeable.
- `petfood_feeding_rows`: {weight_min, weight_max, weight_unit, amount, amount_unit, frequency, note} array.
- `petfood_storage`: storage instructions.
- `petfood_origin`: verified country of manufacture.
- `petfood_certifications`: {label, evidence_reference} entries reviewed by staff.

Register metadata with appropriate schemas and permission callbacks. Expose only validated public product data through a versioned public plugin endpoint or supported Store API extension. ACF may be used for editor UI if selected; it is not mandatory.

## Batches and expiry
Batch inventory is operational data, not a single expiry field on each catalog product. Batch record: product/variation ID, lot, received_at, expiry_date, quantity_remaining and supplier. WooCommerce default stock alone does not implement batch/expiry tracking. Choose an extension or dedicated operational process before promising automated FEFO.

## Editorial content
WordPress posts with slug, title, safe excerpt/body, featured media, publication dates and author display name. Policy pages and homepage content use registered fields or a structured settings schema; React layout remains code.

## Demo catalog
Provide at least 12 labelled sample products, two pet categories, simple and variable products, one out-of-stock item, multiple brands, price ranges and missing metadata examples. Sample nutrition/claims must be clearly fictional demo data, excluded from live deployment.
