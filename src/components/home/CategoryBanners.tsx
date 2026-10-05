import Link from "next/link";

export function CategoryBanners() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dog Meals Banner */}
        <div id="dog-meals" className="rounded-2xl border border-border bg-gradient-to-br from-cream-surface to-white p-7 flex flex-col justify-between shadow-subtle hover:border-sage-border transition">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sage-dark">For Happy Canines</span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-ink">Ready-to-Serve Dog Bowls</h2>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">
              Tender farm chicken, grass-fed mutton, and wholesome vegetables. Steam-cooked to lock in moisture and flavor.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="#shop"
              className="inline-flex items-center text-sm font-semibold text-sage-dark hover:text-sage transition"
            >
              Explore Dog Food →
            </Link>
          </div>
        </div>

        {/* Cat Meals Banner */}
        <div id="cat-meals" className="rounded-2xl border border-border bg-gradient-to-br from-cream-surface to-white p-7 flex flex-col justify-between shadow-subtle hover:border-sage-border transition">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sage-dark">For Discerning Felines</span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-ink">Hydration Cat Recipes</h2>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">
              Wild ocean mackerel, tuna flakes, and silk kitten mousses with vital taurine. Hydration-first nutrition.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="#shop"
              className="inline-flex items-center text-sm font-semibold text-sage-dark hover:text-sage transition"
            >
              Explore Cat Food →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
