"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SITE_IMAGES } from "@/lib/images";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#DE5925] text-white text-[11px] font-semibold py-1.5 px-4 text-center tracking-wide">
        <span>🚚 Free fresh delivery on orders over ₹499 • Ready to serve in 10 seconds</span>
      </div>

      {/* Main Header Bar (Centered Logo Layout) */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 min-h-[84px] sm:min-h-[96px]">
        {/* Left Side: Mobile Menu Button OR Desktop Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6 z-10">
          {/* Mobile Menu Button (Visible on screens < lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white shadow-xs hover:bg-black transition active:scale-95"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex flex-col gap-1.5 items-center justify-center w-4">
              <span
                className={`h-0.5 w-4 bg-white rounded-full transition-transform ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-white rounded-full transition-transform ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
            <Link href="#dog-meals" className="hover:text-[#DE5925] transition py-1">
              Dog Food
            </Link>
            <Link href="#cat-meals" className="hover:text-[#DE5925] transition py-1">
              Cat Food
            </Link>
            <Link href="#shop" className="hover:text-[#DE5925] transition py-1">
              All Recipes
            </Link>
            <Link href="#philosophy" className="hover:text-[#DE5925] transition py-1">
              Nutrition
            </Link>
          </nav>
        </div>

        {/* Absolute Dead Center: Brand Logo (Prominent & Centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto flex items-center justify-center">
          <Link href="/" className="flex items-center justify-center py-1">
            <Image
              src={SITE_IMAGES.logo.src}
              alt={SITE_IMAGES.logo.alt}
              width={280}
              height={100}
              className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-200 hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Right Side: Help, Avatar, and Cart Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 z-10">
          <Link
            href="#help"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#DE5925] transition px-2 py-1"
          >
            HELP
          </Link>

          {/* Orange Circular Avatar Button (Aardvark Style) */}
          <Link
            href="#account"
            aria-label="Account profile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DE5925] text-white font-bold text-xs shadow-xs hover:bg-[#C54A1B] transition active:scale-95"
          >
            PR
          </Link>

          {/* Black Circular Cart Button with White Icon */}
          <Link
            href="#cart"
            aria-label="Shopping Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white shadow-xs hover:bg-black transition active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#DE5925] text-[10px] font-bold text-white border-2 border-white">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 font-bold text-sm uppercase tracking-wider text-[#1A1A1A]">
            <Link
              href="#dog-meals"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DE5925]"
            >
              🐕 Dog Food
            </Link>
            <Link
              href="#cat-meals"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DE5925]"
            >
              🐈 Cat Food
            </Link>
            <Link
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DE5925]"
            >
              🍲 All Ready-To-Serve Meals
            </Link>
            <Link
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DE5925]"
            >
              🌱 Our Nutrition Philosophy
            </Link>
            <Link
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#DE5925]"
            >
              📖 Pet Health & Nutrition Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
