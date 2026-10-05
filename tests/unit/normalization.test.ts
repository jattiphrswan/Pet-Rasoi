import { describe, it, expect } from "vitest";
import {
  formatCurrency,
  filterProducts,
  sortProducts,
} from "@/lib/commerce/normalization";
import { DEMO_PRODUCTS } from "@/data/demo/products";

describe("Commerce Normalization - formatCurrency", () => {
  it("formats positive Indian Rupee values with currency symbol", () => {
    const formatted = formatCurrency(349, "INR");
    // Should format as ₹349 or contain 349
    expect(formatted).toMatch(/349/);
    expect(formatted).toContain("₹");
  });

  it("handles zero amounts gracefully", () => {
    const formatted = formatCurrency(0, "INR");
    expect(formatted).toMatch(/0/);
  });

  it("handles null and undefined values safely without throwing", () => {
    expect(formatCurrency(null)).toBe("—");
    expect(formatCurrency(undefined)).toBe("—");
    expect(formatCurrency(NaN)).toBe("—");
  });

  it("supports fallback when currency code is unusual", () => {
    const formatted = formatCurrency(50, "XYZ");
    expect(formatted).toContain("XYZ");
    expect(formatted).toContain("50");
  });
});

describe("Catalog Filtering - filterProducts", () => {
  it("filters accurately by pet type (cat vs dog)", () => {
    const catsOnly = filterProducts(DEMO_PRODUCTS, { pet: "cat" });
    expect(catsOnly.length).toBeGreaterThan(0);
    expect(catsOnly.every((p) => p.pet === "cat")).toBe(true);

    const dogsOnly = filterProducts(DEMO_PRODUCTS, { pet: "dog" });
    expect(dogsOnly.length).toBeGreaterThan(0);
    expect(dogsOnly.every((p) => p.pet === "dog")).toBe(true);
  });

  it("filters by food type array", () => {
    const freshOnly = filterProducts(DEMO_PRODUCTS, {
      foodType: ["fresh-cooked"],
    });
    expect(freshOnly.length).toBeGreaterThan(0);
    expect(freshOnly.every((p) => p.foodType === "fresh-cooked")).toBe(true);
  });

  it("filters out of stock items when inStockOnly is active", () => {
    const inStock = filterProducts(DEMO_PRODUCTS, { inStockOnly: true });
    expect(inStock.every((p) => p.inStock)).toBe(true);
    expect(inStock.some((p) => p.id === 112)).toBe(false); // 112 is out of stock in demo data
  });

  it("filters by text search across title and ingredients", () => {
    const searchTurmeric = filterProducts(DEMO_PRODUCTS, {
      search: "turmeric",
    });
    expect(searchTurmeric.length).toBeGreaterThan(0);
    expect(
      searchTurmeric.some(
        (p) =>
          p.name.toLowerCase().includes("turmeric") ||
          p.metadata?.ingredients.some((i) =>
            i.toLowerCase().includes("turmeric")
          )
      )
    ).toBe(true);
  });

  it("returns empty array when search matches nothing", () => {
    const impossible = filterProducts(DEMO_PRODUCTS, {
      search: "nonexistent_ingredient_xyz_123",
    });
    expect(impossible).toEqual([]);
  });
});

describe("Catalog Sorting - sortProducts", () => {
  it("sorts products by price ascending correctly", () => {
    const sorted = sortProducts(DEMO_PRODUCTS, "price-asc");
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].price).toBeLessThanOrEqual(sorted[i + 1].price);
    }
  });

  it("sorts products by price descending correctly", () => {
    const sorted = sortProducts(DEMO_PRODUCTS, "price-desc");
    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].price).toBeGreaterThanOrEqual(sorted[i + 1].price);
    }
  });
});
