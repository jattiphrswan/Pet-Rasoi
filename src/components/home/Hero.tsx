export function Hero() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-cream to-cream-surface px-4 py-16 sm:py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full border border-sage-border bg-sage-light px-3.5 py-1 text-xs font-semibold text-sage-dark">
          ✨ Zero Cooking • 100% Wholesome
        </span>

        <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
          Wholesome pet meals, <br />
          <span className="italic text-sage-dark">ready in seconds.</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-ink-muted max-w-xl mx-auto leading-relaxed">
          Gently steam-cooked recipes for dogs and cats. No thawing, no cooking, no mess—just open, pour, and serve.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#meals"
            className="rounded-lg bg-sage-dark px-6 py-3 text-sm font-semibold text-white shadow-subtle hover:bg-sage transition"
          >
            Explore Ready Meals
          </a>
          <a
            href="#how-to-serve"
            className="rounded-lg border border-border bg-white px-6 py-3 text-sm font-semibold text-ink shadow-subtle hover:bg-cream-surface transition"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
