import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const perks = [
    { icon: "🥩", title: "Human-Grade Meat", desc: "Real chicken, mutton & fish" },
    { icon: "⚡", title: "Ready in 10s", desc: "Zero cooking, open & serve" },
    { icon: "🥣", title: "Steam-Cooked Fresh", desc: "Locks in bio-vitamins" },
    { icon: "🩺", title: "Vet Formulated", desc: "Balanced daily nutrition" },
  ];

  return (
    <section className="border-b border-border bg-gradient-to-b from-cream via-cream to-cream-surface">
      {/* Main Banner Showcase */}
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sage-border bg-sage-light px-3.5 py-1 text-xs font-semibold text-sage-dark">
                <span>🍲 Ghar Ka Khana For Your Pet • Ready to Serve</span>
              </span>

              <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Wholesome pet food, <br />
                <span className="text-sage-dark italic">ready in seconds.</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed max-w-lg">
                Gently steam-cooked, 100% human-grade meals for dogs, cats, and birds.
                Zero meal prep, zero defrosting—just tear open, pour into their dish, and serve.
              </p>

              {/* Category Quick Links */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                <Link
                  href="#dog-meals"
                  className="rounded-full border border-border bg-cream px-3 py-1 text-ink hover:border-sage-dark hover:text-sage-dark transition"
                >
                  🐕 Dog Food
                </Link>
                <Link
                  href="#cat-meals"
                  className="rounded-full border border-border bg-cream px-3 py-1 text-ink hover:border-sage-dark hover:text-sage-dark transition"
                >
                  🐈 Cat Food
                </Link>
                <Link
                  href="#shop"
                  className="rounded-full border border-border bg-cream px-3 py-1 text-ink hover:border-sage-dark hover:text-sage-dark transition"
                >
                  🦜 Bird Food
                </Link>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#shop"
                  className="rounded-lg bg-sage-dark px-6 py-3 text-sm font-semibold text-white shadow-subtle hover:bg-sage transition"
                >
                  Explore Menu
                </Link>
                <Link
                  href="#how-to-serve"
                  className="rounded-lg border border-border bg-cream px-6 py-3 text-sm font-semibold text-ink shadow-subtle hover:bg-cream-surface transition"
                >
                  How to Serve
                </Link>
              </div>
            </div>

            {/* Right Product Image Banner */}
            <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto lg:h-[480px] w-full bg-cream-surface">
              <Image
                src="/img/petfoodimg/hero section.png"
                alt="Pet Rasoi Ready to Serve Dog Food, Cat Food and Bird Food Pouches"
                fill
                className="object-cover object-right"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>

        {/* 4 Feature Badges Underneath (GoPet style) */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
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
