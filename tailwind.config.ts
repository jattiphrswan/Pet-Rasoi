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
        cream: {
          DEFAULT: "#FAF9F5",
          surface: "#F4F1EA",
          card: "#FFFFFF",
          muted: "#EDE9DE",
        },
        sage: {
          DEFAULT: "#6B8E71",
          dark: "#47664D",
          light: "#EBF2EC",
          hover: "#5A7C60",
          border: "#C8D9CB",
        },
        ink: {
          DEFAULT: "#1C2420",
          muted: "#4A5850",
          subtle: "#75837B",
        },
        border: {
          DEFAULT: "#E5E1D6",
          light: "#EFECE5",
          strong: "#D2CDBC",
        },
        accent: {
          DEFAULT: "#D8973C",
          warm: "#F5EFE0",
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
        subtle: "0 1px 3px 0 rgba(28, 36, 32, 0.04), 0 1px 2px -1px rgba(28, 36, 32, 0.04)",
        card: "0 4px 12px -2px rgba(28, 36, 32, 0.05), 0 2px 6px -2px rgba(28, 36, 32, 0.03)",
        elevated: "0 12px 24px -4px rgba(28, 36, 32, 0.08), 0 4px 8px -2px rgba(28, 36, 32, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
