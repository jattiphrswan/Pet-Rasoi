import Image from "next/image";

export function NutritionPhilosophy() {
  const pillars = [
    { title: "Human-Grade Meats", desc: "Real chicken, mutton, and wild fish without mystery by-products." },
    { title: "Natural Hydration", desc: "Slow-simmered bone broths that support kidney and urinary vitality." },
    { title: "Essential Taurine", desc: "Vital amino acids naturally preserved to fuel heart and retinal health." },
    { title: "Omega 3 & 6 Oils", desc: "Cold-pressed flaxseed and fish oils for an itch-free, radiant coat." },
    { title: "Zero Gums or Fillers", desc: "Free from carrageenan, wheat gluten, artificial colors, or chemicals." },
  ];

  return (
    <section id="philosophy" className="border-t border-b border-border bg-cream-surface py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Photo of Happy Pet Parent */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-border bg-white shadow-card">
              <Image
                src="/img/petfoodimg/adult-woman-cuddling-her-large-white-dog-2026-09-23-23-30-12-utc.JPG"
                alt="Happy pet parent cuddling healthy white dog"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-warm">
                  Happy &amp; Thriving
                </span>
                <p className="mt-1 font-serif text-lg font-bold">
                  Loved by 10,000+ Pets Across India
                </p>
                <p className="text-xs text-white/80">Real food makes a visible difference in days.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Nutrition Philosophy & Pillars */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
              Kitchen Standards
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
              Our Nutrition Philosophy
            </h2>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">
              Every recipe is prepared fresh in a human-grade kitchen. We prioritize bio-available nutrients, clean digestion, and complete culinary honesty.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-white p-4 shadow-xs hover:border-sage-border transition"
                >
                  <div className="flex items-center gap-2 text-sage-dark font-serif font-bold text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage-light text-xs">
                      ✓
                    </span>
                    {item.title}
                  </div>
                  <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
