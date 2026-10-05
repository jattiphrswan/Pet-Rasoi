import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const perks = [
    { icon: "🥩", title: "Real Whole Meat", desc: "Human-grade chicken & fish" },
    { icon: "⚡", title: "Ready in 10s", desc: "Zero cooking, open & serve" },
    { icon: "🥣", title: "Steam-Cooked Fresh", desc: "Locks in bio-vitamins" },
    { icon: "🩺", title: "Vet Formulated", desc: "Balanced daily nutrition" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-cream via-cream to-cream-surface pt-10 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Grid: Left copy, Right featured product pouch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-block rounded-full border border-sage-border bg-sage-light px-4 py-1 text-xs font-semibold text-sage-dark">
              🐾 Instant, Ready-to-Serve Pet Food
            </span>

            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
              Real food for pets who <br className="hidden sm:inline" />
              <span className="text-sage-dark italic">deserve the best.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-ink-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Gently steam-cooked, nutrient-dense meals for dogs and cats.
              Zero prep, no thawing—just tear open, pour into their dish, and nourish them in seconds.
            </p>

            <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3">
              <Link
                href="#dog-meals"
                className="rounded-lg bg-sage-dark px-6 py-3 text-sm font-semibold text-white shadow-subtle hover:bg-sage transition"
              >
                See Dog Food
              </Link>
              <Link
                href="#cat-meals"
                className="rounded-lg border border-border bg-white px-6 py-3 text-sm font-semibold text-ink shadow-subtle hover:bg-cream-surface transition"
              >
                See Cat Food
              </Link>
            </div>
          </div>

          {/* Right Column: Real Pet Rasoi Pouch Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl border border-border bg-white p-5 shadow-card text-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-cream-surface">
                <Image
                  src="/img/products/213837d0-2df8-403e-b9a1-fa018ee82fe5.png"
                  alt="Pet Rasoi Fresh Meal Pouch"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <div className="mt-4">
                <span className="rounded-full bg-sage-light px-3 py-1 text-[11px] font-semibold text-sage-dark">
                  Ready-to-Serve Pouch
                </span>
                <p className="mt-1.5 font-serif font-bold text-base text-ink">
                  Farm Fresh Chicken &amp; Rice
                </p>
                <p className="text-xs text-ink-muted">Tear • Pour • Serve in 10s</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Badges (GoPet style) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {perks.map((p, i) => (
            <div key={i} className="rounded-xl border border-border bg-white p-4 shadow-xs">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="mt-2 font-serif font-bold text-sm text-ink">{p.title}</h3>
              <p className="mt-0.5 text-xs text-ink-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
