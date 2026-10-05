"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";

export function Hero() {
  const slides = SITE_IMAGES.hero.slides;
  const [current, setCurrent] = useState(0);

  const perks = [
    { icon: "🥩", title: "Real Whole Meat", desc: "Human-grade chicken & fish" },
    { icon: "⚡", title: "Ready in 10s", desc: "Zero cooking, open & serve" },
    { icon: "🥣", title: "Steam-Cooked Fresh", desc: "Locks in bio-vitamins" },
    { icon: "🩺", title: "Vet Formulated", desc: "Balanced daily nutrition" },
  ];

  const activeSlide = slides[current];

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-cream via-cream to-cream-surface pt-10 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Grid: Left copy, Right 3-slide visual showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="inline-block rounded-full border border-sage-border bg-sage-light px-4 py-1 text-xs font-semibold text-sage-dark">
              {activeSlide.badge}
            </span>

            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight transition-all duration-300">
              {activeSlide.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-ink-muted max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-300">
              {activeSlide.subtitle}
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

          {/* Right Column: 3-Image Hero Section Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl border border-border bg-white overflow-hidden shadow-card">
              <Image
                src={activeSlide.src}
                alt={activeSlide.alt}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />

              {/* Slider Controls */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between pointer-events-none">
                {/* Dots indicator */}
                <div className="flex gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full pointer-events-auto">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`h-2 rounded-full transition-all ${
                        current === idx ? "w-6 bg-white" : "w-2 bg-white/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Prev / Next Arrows */}
                <div className="flex gap-1 pointer-events-auto">
                  <button
                    onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white transition"
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white transition"
                    aria-label="Next slide"
                  >
                    ›
                  </button>
                </div>
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
