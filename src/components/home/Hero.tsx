import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";

export function Hero() {
  const perks = [
    { icon: "🥩", title: "100% Human-Grade Meat", desc: "Real chicken, mutton & fresh fish" },
    { icon: "⚡", title: "Ready in 10 Seconds", desc: "No cooking, zero prep, tear & serve" },
    { icon: "🥣", title: "Gently Steam-Cooked", desc: "Locks in bio-vitamins & natural aroma" },
    { icon: "🩺", title: "Vet-Approved Formula", desc: "100% complete daily balanced nutrition" },
  ];

  return (
    <section className="relative bg-[#FAF8F5] border-b border-border overflow-hidden">
      {/* Main Full-Bleed Aardvark-Style Hero Canvas */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] w-full flex items-center">
        {/* Background Image: Cat & Dog Eating Side-by-Side */}
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_IMAGES.heroCloseUp.src}
            alt={SITE_IMAGES.heroCloseUp.alt}
            fill
            priority
            className="object-cover object-left"
            sizes="100vw"
          />
          {/* Soft warm right-side gradient overlay to ensure crystal-clear text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-white/20 sm:to-[#FAF8F5]/90 lg:from-transparent lg:via-[#FAF8F5]/30 lg:to-[#FAF8F5]/95" />
        </div>

        {/* Content Container (Right-aligned over the clean sunlit background) */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex justify-end">
          <div className="w-full sm:max-w-md lg:max-w-lg text-center sm:text-left">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-xs px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#DE5925] border border-[#DE5925]/30 shadow-xs mb-3">
              <span>🍲 Ghar Ka Khana • 100% Ready To Serve</span>
            </div>

            {/* Playful & Bold High-Contrast Typography */}
            <div className="font-display uppercase tracking-wider leading-[0.92]">
              {/* "FOR" in Deep Charcoal Black */}
              <div className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] drop-shadow-xs">
                FOR
              </div>

              {/* "PETS THAT" in Deep Charcoal Black */}
              <div className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] drop-shadow-xs mt-1">
                PETS THAT
              </div>

              {/* Central "LOVE" in Vibrant Brand Terracotta with Playful Whisker Doodles */}
              <div className="my-2 inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                {/* Left Whisker Doodle (3 playful blue arcs) */}
                <svg
                  className="w-8 h-8 sm:w-11 sm:h-11 text-sky-500 stroke-current -rotate-6"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M34 16C26 13 14 11 6 10" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M36 23C24 22 14 22 4 23" strokeWidth="4" strokeLinecap="round" />
                  <path d="M34 30C26 33 14 34 6 36" strokeWidth="3.5" strokeLinecap="round" />
                </svg>

                {/* Big Vibrant LOVE Wordmark */}
                <span className="text-6xl sm:text-7xl lg:text-8xl tracking-normal text-[#DE5925] drop-shadow-md">
                  LOVE
                </span>

                {/* Right Whisker Doodle (3 playful blue arcs) */}
                <svg
                  className="w-8 h-8 sm:w-11 sm:h-11 text-sky-500 stroke-current rotate-6"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M6 16C14 13 26 11 34 10" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M4 23C16 22 26 22 36 23" strokeWidth="4" strokeLinecap="round" />
                  <path d="M6 30C14 33 26 34 34 36" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* "REAL FOOD" Two-Tone Contrast */}
              <div className="text-4xl sm:text-5xl lg:text-6xl drop-shadow-xs mt-1">
                <span className="text-[#1A1A1A]">REAL </span>
                <span className="text-[#DE5925]">FOOD</span>
              </div>
            </div>

            {/* Subtitle Description */}
            <p className="mt-4 text-sm sm:text-base text-[#3D352E] font-medium leading-relaxed max-w-md">
              Gently steam-cooked human-grade meals for dogs and cats.
              Wholesome kitchen nutrition, balanced with farm veggies—open, pour, and ready in 10 seconds.
            </p>

            {/* Pill Action Buttons (Aardvark Pill Style) */}
            <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <Link
                href="#dog-meals"
                className="rounded-full bg-[#DE5925] px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#C54A1B] hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Dog Food
              </Link>
              <Link
                href="#cat-meals"
                className="rounded-full bg-[#DE5925] px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#C54A1B] hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Cat Food
              </Link>
              <Link
                href="#shop"
                className="rounded-full border-2 border-[#1A1A1A] bg-white/90 backdrop-blur-xs px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator Arrow (Aardvark Black Circle with Chevron Down) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <Link
            href="#meals"
            aria-label="Scroll down to browse fresh recipes"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-black/90 text-white shadow-lg transition hover:bg-black hover:scale-110 active:scale-95 animate-bounce"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* 4 Feature Badges Underneath (Trust Row) */}
      <div id="meals" className="bg-white border-t border-border py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {perks.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-[#FAF8F5] p-4 transition hover:border-[#DE5925]/30 hover:shadow-xs"
              >
                <span className="text-2xl sm:text-3xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#1A1A1A]">{p.title}</h3>
                  <p className="mt-0.5 text-xs text-[#5C554E] leading-snug">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
