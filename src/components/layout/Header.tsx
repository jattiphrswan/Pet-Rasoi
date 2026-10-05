import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
      {/* Top Announcement Bar (GoPet style) */}
      <div className="bg-sage-dark text-white text-[11px] font-medium py-1.5 px-4 text-center">
        <span>🚚 Free fresh delivery on orders over ₹499 • Ready to serve in 10 seconds</span>
      </div>

      {/* Main Header Bar */}
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

        {/* GoPet Style Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-ink">
          <Link href="/" className="text-sage-dark hover:text-sage transition">Home</Link>
          <Link href="#dog-meals" className="hover:text-sage-dark transition">Dog Food</Link>
          <Link href="#cat-meals" className="hover:text-sage-dark transition">Cat Food</Link>
          <Link href="#shop" className="hover:text-sage-dark transition">All Recipes</Link>
          <Link href="#philosophy" className="hover:text-sage-dark transition">Nutrition</Link>
          <Link href="#blog" className="hover:text-sage-dark transition">Blog</Link>
        </nav>

        {/* Quick Shopping Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="#shop"
            className="hidden sm:inline-flex rounded-full bg-sage-light px-3.5 py-1.5 text-xs font-semibold text-sage-dark hover:bg-sage/20 transition"
          >
            Order Ready Meals
          </Link>

          {/* Cart Icon with count */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-cream hover:bg-cream-surface transition"
            aria-label="Shopping Cart"
          >
            <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-sage-dark text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
