import { Product, ShopFilters } from "@/types";

/**
 * Normalizes and formats currency values safely.
 * Returns a human-readable formatted string with symbol.
 */
export function formatCurrency(
  amount: number | null | undefined,
  currency: string = "INR"
): string {
  if (amount == null || isNaN(amount)) {
    return "—";
  }

  const normalizedCurrency = currency.toUpperCase();

  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: normalizedCurrency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    // Fallback if currency code is unmapped
    return `${normalizedCurrency} ${amount.toFixed(2)}`;
  }
}

/**
 * Filters a catalog of products against active multi-dimension filters.
 */
export function filterProducts(
  products: Product[],
  filters: ShopFilters
): Product[] {
  return products.filter((product) => {
    // Pet filter
    if (filters.pet && product.pet !== filters.pet) {
      return false;
    }

    // Food Type filter
    if (
      filters.foodType &&
      filters.foodType.length > 0 &&
      !filters.foodType.includes(product.foodType)
    ) {
      return false;
    }

    // Life Stage filter
    if (
      filters.lifeStage &&
      filters.lifeStage.length > 0 &&
      !filters.lifeStage.some((stage) => product.lifeStage.includes(stage))
    ) {
      return false;
    }

    // Breed Size filter
    if (
      filters.breedSize &&
      filters.breedSize.length > 0 &&
      !filters.breedSize.some((size) => product.breedSize.includes(size))
    ) {
      return false;
    }

    // Diet filter
    if (
      filters.diet &&
      filters.diet.length > 0 &&
      !filters.diet.some((diet) => product.diet.includes(diet))
    ) {
      return false;
    }

    // Brand filter
    if (
      filters.brand &&
      filters.brand.length > 0 &&
      !filters.brand.includes(product.brand)
    ) {
      return false;
    }

    // In Stock Only
    if (filters.inStockOnly && !product.inStock) {
      return false;
    }

    // Price range
    if (filters.minPrice != null && product.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice != null && product.price > filters.maxPrice) {
      return false;
    }

    // Search query
    if (filters.search && filters.search.trim() !== "") {
      const q = filters.search.toLowerCase().trim();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchIngredients = product.metadata?.ingredients.some((ing) =>
        ing.toLowerCase().includes(q)
      );
      if (!matchName && !matchDesc && !matchBrand && !matchIngredients) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Sorts products based on specified sort criteria.
 */
export function sortProducts(
  products: Product[],
  sort: ShopFilters["sort"] = "featured"
): Product[] {
  const sorted = [...products];

  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "featured":
    default:
      return sorted;
  }
}
