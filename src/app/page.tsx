import { DEMO_PRODUCTS } from "@/data/demo/products";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CategoryBanners } from "@/components/home/CategoryBanners";
import { ServingSteps } from "@/components/home/ServingSteps";
import { FeaturedTabs } from "@/components/home/FeaturedTabs";
import { NutritionPhilosophy } from "@/components/home/NutritionPhilosophy";
import { BlogPreview } from "@/components/home/BlogPreview";

export default function HomePage() {
  const isDemoMode = process.env.NEXT_PUBLIC_DATA_MODE !== "live";

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      {/* Demo Notice */}
      {isDemoMode && (
        <aside className="border-b border-border bg-cream-surface px-4 py-1.5 text-center text-xs text-ink-muted">
          <strong className="text-sage-dark">Demo Storefront:</strong> Previewing sample recipes. Connect WooCommerce for live ordering.
        </aside>
      )}

      {/* Navigation Header */}
      <Header />

      <main id="main-content" className="flex-1">
        {/* GoPet Style Hero Showcase */}
        <Hero />

        {/* Dog vs Cat Split Banners */}
        <CategoryBanners />

        {/* 3-Step Serving Protocol */}
        <ServingSteps />

        {/* Interactive Category Filter & Featured Meals */}
        <FeaturedTabs products={DEMO_PRODUCTS} />

        {/* Verified Kitchen Standards */}
        <NutritionPhilosophy />

        {/* Pet Nutrition Journal / Blog */}
        <BlogPreview />
      </main>

      {/* Rich GoPet Style Footer */}
      <Footer />
    </div>
  );
}
