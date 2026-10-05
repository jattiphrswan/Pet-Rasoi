/**
 * Centralized Image Configuration for Pet Rasoi
 *
 * All image assets, whether user-provided in public/img or catalog images,
 * are mapped here. To change or add images, simply update this file.
 */

export interface ImageMapping {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const SITE_IMAGES = {
  // Brand identity assets supplied by user
  logo: {
    src: "/img/pet_rasoi_logo_transparent.png",
    alt: "Pet Rasoi — Fresh & Wholesome Kitchen",
    width: 220,
    height: 60,
  },
  favicon: {
    src: "/img/pet_rasoi_favicon.png",
    alt: "Pet Rasoi Icon",
    width: 32,
    height: 32,
  },

  // Hero section image slots (3 slides from user petfoodimg folder)
  hero: {
    slides: [
      {
        id: 1,
        src: "/img/petfoodimg/hero section.png",
        alt: "Pet Rasoi Kitchen Fresh Ready-to-Serve Meals",
        badge: "✨ Instant, Ready-to-Serve Pet Food",
        title: "Real food for pets who deserve the best.",
        subtitle: "Gently steam-cooked, whole-food recipes for dogs and cats. Open, pour, and nourish in 10 seconds.",
      },
      {
        id: 2,
        src: "/img/petfoodimg/adult-woman-cuddling-her-large-white-dog-2026-09-23-23-30-12-utc.JPG",
        alt: "Happy dog and pet parent enjoying healthy wholesome meals",
        badge: "❤️ Loved by Happy Pets & Parents",
        title: "Wholesome love in every single bowl.",
        subtitle: "Formulated by veterinary nutritionists with 100% human-grade meats and farm-fresh produce.",
      },
      {
        id: 3,
        src: "/img/petfoodimg/bowls-of-dry-pet-food-on-purple-backdrop-2026-09-23-22-06-40-utc.jpg",
        alt: "Nutrient-packed crunchy bowls and slow-baked recipes",
        badge: "🥣 Zero Hassle • Fresh Daily",
        title: "Clean nutrition, zero messy kitchen prep.",
        subtitle: "Naturally sealed for maximum freshness. Perfect balanced portions ready whenever they are hungry.",
      },
    ],
  },

  // Category imagery
  categories: {
    dogReadyToServe: {
      src: "/img/category_dog_ready_to_serve.jpg",
      alt: "Instant Ready-to-Serve Dog Meals",
    },
    catHydrationPate: {
      src: "/img/category_cat_hydration.jpg",
      alt: "Ready-to-Serve Cat Broths & Mousse",
    },
    slowSimmeredBroths: {
      src: "/img/category_broths.jpg",
      alt: "Instant Bone Broth Toppers",
    },
    trainingTreats: {
      src: "/img/category_treats.jpg",
      alt: "Single Ingredient Natural Treats",
    },
  },

  // Per-product image overrides (ID or Slug -> path in public/img)
  // When you add new images into public/img/, map them here.
  productOverrides: {
    101: "/img/products/213837d0-2df8-403e-b9a1-fa018ee82fe5.png",
    102: "/img/products/83603585-6e18-43e5-9c52-b765392d479d.png",
    103: "/img/products/dd56b0c0-e37a-487c-89d2-dab5b76606cc.png",
    104: "/img/products/2c97d212-c8dc-4b1f-83f5-da40086a10f1.png",
    105: "/img/products/Pet Rasoi premium fish food pouch-1.png",
    "rasoi-fresh-farm-chicken-brown-rice": "/img/products/213837d0-2df8-403e-b9a1-fa018ee82fe5.png",
    "tender-mutton-sweet-potato-feast": "/img/products/83603585-6e18-43e5-9c52-b765392d479d.png",
    "puppy-growth-nourish-bowl": "/img/products/dd56b0c0-e37a-487c-89d2-dab5b76606cc.png",
    "senior-canine-vitality-stew": "/img/products/2c97d212-c8dc-4b1f-83f5-da40086a10f1.png",
    "feline-shredded-mackerel-tuna-broth": "/img/products/Pet Rasoi premium fish food pouch-1.png",
  } as Record<number | string, string>,
};

/**
 * Resolves a product's primary image.
 * If user has supplied an override in SITE_IMAGES.productOverrides, uses that.
 * Otherwise uses the product's catalog image or returns null for neutral placeholder.
 */
export function resolveProductImage(
  productId: number,
  slug: string,
  catalogSrc?: string
): string | null {
  if (SITE_IMAGES.productOverrides[productId]) {
    return SITE_IMAGES.productOverrides[productId];
  }
  if (SITE_IMAGES.productOverrides[slug]) {
    return SITE_IMAGES.productOverrides[slug];
  }
  if (catalogSrc && catalogSrc.trim().length > 0) {
    return catalogSrc;
  }
  return null;
}
