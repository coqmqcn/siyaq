import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        content: "var(--content)",
        gold: "var(--accent-gold)",
        silver: "var(--accent-silver)"
      },
      borderRadius: {
        md: "var(--radius-m)",
        lg: "var(--radius-l)"
      },
      boxShadow: {
        soft: "var(--shadow-soft)"
      },
      transitionTimingFunction: {
        out: "var(--ease-out)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
