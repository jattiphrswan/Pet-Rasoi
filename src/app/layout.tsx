import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_IMAGES } from "@/lib/images";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pet Rasoi",
    default: "Pet Rasoi — Instant, Ready-to-Serve Wholesome Pet Food",
  },
  description:
    "Instant, ready-to-serve nutritious pet meals, comforting bone broths, and natural treats. Gently cooked, portion-controlled, and ready in seconds.",
  icons: {
    icon: SITE_IMAGES.favicon.src,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Pet Rasoi — Instant Ready-to-Serve Pet Food",
    description:
      "Tear, pour and serve fresh wholesome meals for dogs and cats. Honest nutrition with effortless convenience.",
    siteName: "Pet Rasoi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink antialiased selection:bg-sage-light selection:text-sage-dark">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
