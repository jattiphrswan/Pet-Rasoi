import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Authentic Pet Rasoi Logo Palette: Terracotta Orange, Warm Tan & Rich Charcoal
        brand: {
          DEFAULT: "#DE5925", // Exact logo circle & "Rasoi" color
          dark: "#B84315",    // Deep terracotta for high-contrast text & active buttons
          light: "#FDF2EB",   // Warm soft peach/cream tint for badges
          hover: "#C64B1A",
          border: "#F5D1C3",
        },
        // Alias sage to brand so all existing components seamlessly adopt the logo color
        sage: {
          DEFAULT: "#DE5925",
          dark: "#B84315",
          light: "#FDF2EB",
          hover: "#C64B1A",
          border: "#F5D1C3",
        },
        cream: {
          DEFAULT: "#FAF8F5", // Warm white canvas matching logo bowl
          surface: "#F5F0EA", // Warm cream surface
          card: "#FFFFFF",
          muted: "#EDE6DE",
        },
        ink: {
          DEFAULT: "#1A1A1A", // Matches "Pet" bold black lettering
          muted: "#4E4E4E",   // Matches "Ghar ka khana for your pet" tagline
          subtle: "#767676",
        },
        border: {
          DEFAULT: "#EADFD6", // Soft warm border
          light: "#F4EDE6",
          strong: "#DBC8BB",
        },
        accent: {
          DEFAULT: "#DCA46A", // Matches tan underline in logo
          warm: "#FBF4EC",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: [
          "var(--font-sans)",
          "Plus Jakarta Sans",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(30, 20, 15, 0.04), 0 1px 2px -1px rgba(30, 20, 15, 0.04)",
        card: "0 4px 12px -2px rgba(222, 89, 37, 0.06), 0 2px 6px -2px rgba(30, 20, 15, 0.03)",
        elevated: "0 12px 24px -4px rgba(222, 89, 37, 0.12), 0 4px 8px -2px rgba(30, 20, 15, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
