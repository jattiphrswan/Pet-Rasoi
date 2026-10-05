export type PetType = "dog" | "cat" | "bird";

export type LifeStage = "puppy-kitten" | "adult" | "senior";

export type BreedSize = "small" | "medium" | "large" | "all";

export type DietType =
  | "grain-free"
  | "sensitive-stomach"
  | "weight-management"
  | "high-protein"
  | "fresh-cooked";

export type FoodType = "dry" | "wet" | "fresh-cooked" | "treats";

export interface NutrientAnalysis {
  nutrient: string;
  value: number;
  unit: string;
  qualifier: "min" | "max" | "typical";
}

export interface CaloriesInfo {
  value: number;
  unit: "kcal/kg" | "kcal/cup";
}

export interface FeedingRow {
  weightMinKg: number;
  weightMaxKg: number;
  dailyGrams: number;
  frequency: string;
  notes?: string;
}

export interface PetFoodMetadata {
  ingredients: string[];
  analysis: NutrientAnalysis[];
  calories?: CaloriesInfo;
  feedingGuide?: FeedingRow[];
  storageInstructions?: string;
  countryOfOrigin: string;
  certifications?: Array<{
    label: string;
    referenceUrl?: string;
  }>;
}

export interface ProductVariation {
  id: number;
  sku: string;
  name: string;
  packSize: string;
  price: number;
  regularPrice?: number;
  inStock: boolean;
  stockQuantity?: number;
}

export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  shortDescription?: string;
  pet: PetType;
  brand: string;
  foodType: FoodType;
  lifeStage: LifeStage[];
  breedSize: BreedSize[];
  diet: DietType[];
  price: number;
  regularPrice?: number;
  currency: string;
  images: ProductImage[];
  variations?: ProductVariation[];
  isSimple: boolean;
  inStock: boolean;
  stockQuantity?: number;
  metadata?: PetFoodMetadata;
  isDemo?: boolean;
}

export interface CartItem {
  key: string;
  productId: number;
  variationId?: number;
  name: string;
  packSize?: string;
  unitPrice: number;
  quantity: number;
  subtotal: number;
  currency: string;
  image?: string;
}

export interface Cart {
  items: CartItem[];
  itemsCount: number;
  subtotal: number;
  shippingTotal: number;
  discountTotal: number;
  total: number;
  currency: string;
  coupons: string[];
  needsShipping: boolean;
  isDemo: boolean;
}

export interface ShopFilters {
  pet?: PetType;
  foodType?: FoodType[];
  lifeStage?: LifeStage[];
  breedSize?: BreedSize[];
  diet?: DietType[];
  brand?: string[];
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  inStockOnly?: boolean;
  sort?: "featured" | "price-asc" | "price-desc" | "name-asc";
}
