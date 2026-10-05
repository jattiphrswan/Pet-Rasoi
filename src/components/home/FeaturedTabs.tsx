"use client";

import { useState } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";

interface FeaturedTabsProps {
  products: Product[];
}

export function FeaturedTabs({ products }: FeaturedTabsProps) {
  const [activeTab, setActiveTab] = useState<"all" | "dog" | "cat" | "treats">("all");

  const filtered = products.filter((p) => {
    if (activeTab === "dog") return p.pet === "dog";
    if (activeTab === "cat") return p.pet === "cat";
    if (activeTab === "treats") return p.foodType === "treats" || p.foodType === "wet";
    return true;
  });

  const tabs: Array<{ id: "all" | "dog" | "cat" | "treats"; label: string }> = [
    { id: "all", label: "All Recipes" },
    { id: "dog", label: "Dog Meals" },
    { id: "cat", label: "Cat Recipes" },
    { id: "treats", label: "Broths & Treats" },
  ];

  return (
    <section id="shop" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header & Category Tabs (GoPet style) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-5 mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
            Fresh Menu
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-ink">
            Featured Pet Rasoi Meals
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="mt-4 sm:mt-0 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                activeTab === tab.id
                  ? "bg-sage-dark text-white shadow-xs"
                  : "bg-cream-surface text-ink-muted hover:bg-cream-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
