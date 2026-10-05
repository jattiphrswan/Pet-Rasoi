import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={SITE_IMAGES.logo.src}
            alt={SITE_IMAGES.logo.alt}
            width={SITE_IMAGES.logo.width}
            height={SITE_IMAGES.logo.height}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Friendly Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-muted">
          <Link href="#meals" className="hover:text-sage-dark transition">Ready Meals</Link>
          <Link href="#how-to-serve" className="hover:text-sage-dark transition">How to Serve</Link>
          <Link href="#promise" className="hover:text-sage-dark transition">Our Promise</Link>
        </nav>

        {/* Quick Cart & Badge */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-sage-dark">
            🌱 Open &amp; Serve in 10s
          </span>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-cream hover:bg-cream-surface transition"
            aria-label="Cart"
          >
            <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
