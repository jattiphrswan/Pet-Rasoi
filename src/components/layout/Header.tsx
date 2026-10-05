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

      {/* Main Header Bar (Aardvark-Style Layout) */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Left Side: Circular Menu Button & Desktop Nav */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white shadow-xs hover:bg-black transition active:scale-95"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {/* 2 horizontal bars (Aardvark style) */}
            <div className="flex flex-col gap-1.5 items-center justify-center w-4">
              <span className={`h-0.5 w-4 bg-white rounded-full transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`h-0.5 w-4 bg-white rounded-full transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
            <Link href="#dog-meals" className="hover:text-[#DE5925] transition">Dog Food</Link>
            <Link href="#cat-meals" className="hover:text-[#DE5925] transition">Cat Food</Link>
            <Link href="#shop" className="hover:text-[#DE5925] transition">All Recipes</Link>
            <Link href="#philosophy" className="hover:text-[#DE5925] transition">Nutrition</Link>
          </nav>
        </div>

        {/* Center: Brand Logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image
            src={SITE_IMAGES.logo.src}
            alt={SITE_IMAGES.logo.alt}
            width={SITE_IMAGES.logo.width}
            height={SITE_IMAGES.logo.height}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right Side: Help, Avatar, and Cart Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#DE5925] text-[10px] font-bold text-white border-2 border-white">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-white px-4 py-4 sm:hidden animate-in fade-in slide-in-from-top-2">
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
