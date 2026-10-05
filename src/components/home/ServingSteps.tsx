export function ServingSteps() {
  const steps = [
    { num: "1", title: "Tear Pouch", desc: "Sealed fresh. Keep in your pantry, zero defrosting needed." },
    { num: "2", title: "Pour Cleanly", desc: "Pre-portioned cooked meals slide right into their bowl." },
    { num: "3", title: "Serve & Nourish", desc: "Serve at room temp or warm slightly for a cozy meal." },
  ];

  return (
    <section id="how-to-serve" className="border-b border-border bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
          Easy Serving
        </span>
        <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-ink">
          From Pantry to Bowl in 3 Steps
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-xl border border-border bg-cream/40 p-5 text-center hover:border-sage-border transition"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-sage-dark font-serif font-bold text-sm">
                {step.num}
              </div>
              <h3 className="font-serif font-bold text-base text-ink">{step.title}</h3>
              <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
