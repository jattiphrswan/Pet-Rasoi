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

  // Hero section image slots
  hero: {
    main: {
      src: "/img/hero_fresh_serving.jpg", // Optional user replacement
      alt: "Freshly opened ready-to-serve nutritious pet meal bowl",
    },
    servingSteps: {
      step1: "/img/step_open_pouch.jpg",
      step2: "/img/step_pour_bowl.jpg",
      step3: "/img/step_serve_pet.jpg",
    },
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
  // When a user drops new images into public/img/, map them here.
  productOverrides: {} as Record<number | string, string>,
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
