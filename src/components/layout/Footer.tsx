import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ink-muted">
        <div className="flex items-center gap-3">
          <Image
            src={SITE_IMAGES.logo.src}
            alt="Pet Rasoi"
            width={120}
            height={32}
            className="h-7 w-auto object-contain"
          />
          <span>•</span>
          <p>© {new Date().getFullYear()} Pet Rasoi. Wholesome, ready-to-serve pet food.</p>
        </div>

        <div className="flex flex-wrap gap-6">
          <Link href="/privacy" className="hover:text-sage-dark transition">Privacy</Link>
          <Link href="/terms" className="hover:text-sage-dark transition">Terms</Link>
          <Link href="/shipping" className="hover:text-sage-dark transition">Shipping</Link>
          <Link href="/contact" className="hover:text-sage-dark transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
