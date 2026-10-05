"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Newsletter Signup (GoPet style) */}
        <div className="rounded-2xl border border-sage-border bg-sage-light/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Join the Pet Rasoi Club
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-ink-muted">
              Get feeding guides, batch updates, and 15% off your first ready-to-serve order.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-lg border border-border bg-white px-4 py-2.5 text-xs text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-sage-dark w-full md:w-64"
            />
            <button
              type="submit"
              className="rounded-lg bg-sage-dark px-5 py-2.5 text-xs font-semibold text-white hover:bg-sage transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-border text-xs">
          <div>
            <Image
              src={SITE_IMAGES.logo.src}
              alt="Pet Rasoi"
              width={140}
              height={38}
              className="h-8 w-auto object-contain mb-3"
            />
            <p className="text-ink-muted leading-relaxed">
              Wholesome, steam-cooked meals and hydration broths. Zero prep, ready in seconds.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-ink mb-3">Shop Categories</h4>
            <ul className="space-y-2 text-ink-muted">
              <li><Link href="#dog-meals" className="hover:text-sage-dark transition">Dog Food Bowls</Link></li>
              <li><Link href="#cat-meals" className="hover:text-sage-dark transition">Feline Hydration</Link></li>
              <li><Link href="#shop" className="hover:text-sage-dark transition">Slow-Baked Kibble</Link></li>
              <li><Link href="#shop" className="hover:text-sage-dark transition">Bone Broths &amp; Toppers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-ink mb-3">Customer Care</h4>
            <ul className="space-y-2 text-ink-muted">
              <li><Link href="/about" className="hover:text-sage-dark transition">Kitchen Standards</Link></li>
              <li><Link href="#how-to-serve" className="hover:text-sage-dark transition">Serving Protocol</Link></li>
              <li><Link href="/shipping" className="hover:text-sage-dark transition">Shipping &amp; Fresh Packs</Link></li>
              <li><Link href="/contact" className="hover:text-sage-dark transition">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-ink mb-3">Trust &amp; Quality</h4>
            <ul className="space-y-2 text-ink-muted">
              <li>🌿 100% Whole Ingredients</li>
              <li>⚡ 10-Second Serving Time</li>
              <li>🔒 Secure WooCommerce Checkout</li>
              <li>📦 Temperature-Preserved Delivery</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-subtle">
          <p>© {new Date().getFullYear()} Pet Rasoi. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
