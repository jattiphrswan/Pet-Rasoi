import Image from "next/image";
import Link from "next/link";
import { DEMO_PRODUCTS } from "@/data/demo/products";
import { formatCurrency } from "@/lib/commerce/normalization";
import { SITE_IMAGES, resolveProductImage } from "@/lib/images";
import { NeutralImagePlaceholder } from "@/components/ui/NeutralImagePlaceholder";

export default function HomePage() {
  const isDemoMode = process.env.NEXT_PUBLIC_DATA_MODE !== "live";

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      {/* Demo Mode Notice */}
      {isDemoMode && (
        <aside
          role="region"
          aria-label="Demonstration Mode Notice"
          className="border-b border-border bg-cream-surface px-4 py-1.5 text-center text-xs text-ink-muted"
        >
          <span className="font-semibold uppercase tracking-wider text-sage-dark">
            Demo Storefront:
          </span>{" "}
          Sample ready-to-serve catalog preview. Prices and ordering are demonstrative pending WooCommerce connection.
        </aside>
      )}

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <Image
              src={SITE_IMAGES.logo.src}
              alt={SITE_IMAGES.logo.alt}
              width={SITE_IMAGES.logo.width}
              height={SITE_IMAGES.logo.height}
              className="h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Nav Categories */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-muted">
            <Link href="#ready-meals" className="hover:text-sage-dark transition-colors">
              Ready-to-Serve Meals
            </Link>
            <Link href="#dog-meals" className="hover:text-sage-dark transition-colors">
              Dog Bowls
            </Link>
            <Link href="#cat-meals" className="hover:text-sage-dark transition-colors">
              Cat Nutrition
            </Link>
            <Link href="#broths-toppers" className="hover:text-sage-dark transition-colors">
              Broths &amp; Toppers
            </Link>
            <Link href="#how-it-works" className="hover:text-sage-dark transition-colors">
              Easy Serving Guide
            </Link>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="#ready-meals"
              className="hidden sm:inline-flex items-center rounded-full bg-sage-light px-3.5 py-1 text-xs font-semibold text-sage-dark hover:bg-sage/20 transition-colors"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
              Open &amp; Serve in 10s
            </Link>
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-lg border border-border bg-cream p-2 text-ink hover:bg-cream-surface transition-colors focus:outline-none focus:ring-2 focus:ring-sage-dark"
              aria-label="View shopping cart"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="sr-only">Items in cart:</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-sage-dark text-[10px] font-bold text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        {/* Hero Section: Instant, Ready-to-Serve Pet Food */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-cream via-cream to-cream-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sage-border bg-sage-light px-4 py-1 text-xs font-semibold text-sage-dark">
              <span>Zero Meal Prep • 100% Cooked Whole Food</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-ink leading-tight">
              Wholesome Pet Nutrition, <br className="hidden sm:inline" />
              <span className="italic text-sage-dark">Ready in Seconds.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Gently steam-cooked fresh meals, hydrating bone broths, and nutrient-dense toppers for dogs and cats.
              No thawing, no cooking, no mess—just open, pour, and serve honest kitchen nourishment.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#ready-meals"
                className="rounded-lg bg-sage-dark px-6 py-3.5 text-sm font-semibold text-white shadow-subtle hover:bg-sage transition-all focus:outline-none focus:ring-2 focus:ring-sage-dark focus:ring-offset-2"
              >
                Browse Ready-to-Serve Meals
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg border border-border bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-subtle hover:bg-cream-surface transition-all focus:outline-none focus:ring-2 focus:ring-sage-dark"
              >
                How It Works
              </a>
            </div>

            {/* Ready-to-Serve Convenience Metric */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 text-center max-w-2xl mx-auto">
              <div>
                <p className="font-serif text-2xl font-bold text-sage-dark">10s</p>
                <p className="text-xs text-ink-muted mt-0.5">Average Serving Time</p>
              </div>
              <div className="border-x border-border">
                <p className="font-serif text-2xl font-bold text-sage-dark">0%</p>
                <p className="text-xs text-ink-muted mt-0.5">Fillers or Preservatives</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-sage-dark">100%</p>
                <p className="text-xs text-ink-muted mt-0.5">Human-Grade Ingredients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Effortless Serving Steps (3 Simple Steps) */}
        <section id="how-it-works" className="border-b border-border bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
                Simple Serving Protocol
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-bold text-ink">
                From Pantry to Bowl in Three Steps
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Engineered for maximum convenience without compromising biological nutrition.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-xl border border-border bg-cream/50 p-6 text-center transition-all hover:border-sage-border hover:shadow-subtle">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-sage-dark font-serif font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-serif font-bold text-base text-ink">Tear Pouch</h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  Easy-tear hermetically sealed pouches protect flavor and natural vitamins without refrigeration before opening.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl border border-border bg-cream/50 p-6 text-center transition-all hover:border-sage-border hover:shadow-subtle">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-sage-dark font-serif font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-serif font-bold text-base text-ink">Pour Cleanly</h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  Pre-portioned serving sizes pour smoothly into your pet’s favorite feeding dish. Zero prep utensils needed.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl border border-border bg-cream/50 p-6 text-center transition-all hover:border-sage-border hover:shadow-subtle">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-sage-dark font-serif font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-serif font-bold text-base text-ink">Serve &amp; Smile</h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  Serve at room temperature or warm slightly in hot water for comforting aroma. Watch their tails wag.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready-to-Serve Catalog Section */}
        <section id="ready-meals" className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-6 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
                Kitchen Offerings
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-bold text-ink">
                Ready-to-Serve Meals &amp; Bowls
              </h2>
            </div>
            <p className="mt-2 sm:mt-0 text-xs text-ink-muted">
              Displaying verified formulations with authentic ingredient disclosures
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_PRODUCTS.map((product) => {
              const imageSrc = resolveProductImage(
                product.id,
                product.slug,
                product.images[0]?.src
              );

              return (
                <article
                  key={product.id}
                  className="group flex flex-col rounded-xl border border-border bg-white overflow-hidden shadow-subtle hover:shadow-card hover:border-sage-border transition-all"
                >
                  {/* Image or Neutral Placeholder */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-surface border-b border-border/70">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={product.images[0]?.alt || product.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <NeutralImagePlaceholder
                        title={product.name}
                        category={product.pet === "dog" ? "Dog Recipe" : "Cat Recipe"}
                      />
                    )}

                    {/* Pet & Food Type Badges */}
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="rounded bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-sage-dark shadow-sm border border-border/60">
                        {product.pet === "dog" ? "Dog" : "Cat"}
                      </span>
                      <span className="rounded bg-sage-light/95 px-2 py-0.5 text-[11px] font-semibold text-sage-dark shadow-sm border border-sage-border/60 capitalize">
                        {product.foodType.replace("-", " ")}
                      </span>
                    </div>

                    {!product.inStock && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs">
                        <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-red-700 shadow">
                          Temporarily Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-semibold tracking-wide text-sage-dark">
                      {product.brand}
                    </span>
                    <h3 className="mt-1 text-base font-serif font-bold text-ink group-hover:text-sage-dark transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                      {product.shortDescription || product.description}
                    </p>

                    {/* Key Nutritional Metrics */}
                    {product.metadata?.analysis && product.metadata.analysis.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                        {product.metadata.analysis.slice(0, 2).map((nutrient, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-cream-surface px-2 py-0.5 text-[10px] text-ink-muted"
                          >
                            {nutrient.nutrient}: {nutrient.value}
                            {nutrient.unit} ({nutrient.qualifier})
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Card Footer with Price and Serving CTA */}
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border">
                      <div>
                        <span className="text-base font-bold text-ink">
                          {formatCurrency(product.price, product.currency)}
                        </span>
                        {product.regularPrice && (
                          <span className="ml-2 text-xs text-ink-subtle line-through">
                            {formatCurrency(product.regularPrice, product.currency)}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        disabled={!product.inStock}
                        className="rounded-lg bg-cream border border-border px-3.5 py-1.5 text-xs font-semibold text-ink hover:bg-sage-dark hover:text-white hover:border-sage-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {product.isSimple ? "Add to Cart" : "Select Size"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Nutritional Honesty & Kitchen Standards */}
        <section className="border-t border-border bg-cream-surface py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
              Our Promise: Real Nutrition, Honestly Declared
            </h2>
            <p className="mt-3 text-sm text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Every recipe lists verified ingredients with full guaranteed analysis disclosures.
              We never fabricate certifications, medical claims, or unproven health benefits.
              Just wholesome, ready-to-serve ingredients your pet will love.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ink-muted">
          <div className="flex items-center gap-3">
            <Image
              src={SITE_IMAGES.logo.src}
              alt="Pet Rasoi"
              width={140}
              height={38}
              className="h-7 w-auto object-contain"
            />
            <span className="text-ink-subtle">|</span>
            <p>© {new Date().getFullYear()} Pet Rasoi. Instant, ready-to-serve pet meals.</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-sage-dark transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-sage-dark transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping" className="hover:text-sage-dark transition-colors">
              Delivery &amp; Packaging
            </Link>
            <Link href="/contact" className="hover:text-sage-dark transition-colors">
              Contact Kitchen
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
