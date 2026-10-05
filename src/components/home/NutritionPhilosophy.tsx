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
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
          Kitchen Standards
        </span>
        <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-ink">
          Our Nutrition Philosophy
        </h2>
        <p className="mt-2 text-sm text-ink-muted max-w-xl mx-auto">
          Every recipe is crafted in a human-grade kitchen with verified, whole-food nutrition.
        </p>

        {/* 5 Nutrition Pillars Grid (GoPet style) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-white p-5 shadow-xs hover:border-sage-border transition"
            >
              <div className="flex items-center gap-2 text-sage-dark font-serif font-bold text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage-light text-xs">
                  ✓
                </span>
                {item.title}
              </div>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
