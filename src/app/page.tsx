import { DEMO_PRODUCTS } from "@/data/demo/products";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ServingSteps } from "@/components/home/ServingSteps";
import { ProductCard } from "@/components/product/ProductCard";

export default function HomePage() {
  const isDemoMode = process.env.NEXT_PUBLIC_DATA_MODE !== "live";

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      {/* Friendly Demo Notice */}
      {isDemoMode && (
        <aside className="border-b border-border bg-cream-surface px-4 py-1.5 text-center text-xs text-ink-muted">
          <strong className="text-sage-dark">Demo Storefront:</strong> Previewing sample recipes. Connect WooCommerce for live ordering.
        </aside>
      )}

      <Header />

      <main id="main-content" className="flex-1">
        <Hero />
        <ServingSteps />

        {/* Ready-to-Serve Catalog */}
        <section id="meals" className="px-4 py-14 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
                Fresh From the Kitchen
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-ink">
                Ready-to-Serve Meals &amp; Bowls
              </h2>
            </div>
            <p className="mt-2 sm:mt-0 text-xs text-ink-muted">
              {DEMO_PRODUCTS.length} recipes crafted with whole ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Brand Promise Section */}
        <section id="promise" className="border-t border-border bg-cream-surface py-14 px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Our Promise: Honest Nutrition, Zero Hassle
            </h2>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              Every recipe is prepared with verified, human-grade meats and fresh vegetables.
              We never use artificial fillers, colors, or unverified claims. Just pure, wholesome food ready when your pet is.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
