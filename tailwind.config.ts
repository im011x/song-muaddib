import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FCFAF8",
        foreground: "#1A1A1A",
        primary: {
          DEFAULT: "#C5A059",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E8E4DC",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#F5F3F0",
          foreground: "#6B6B6B",
        },
        accent: {
          DEFAULT: "#C5A059",
          foreground: "#FFFFFF",
        },
        border: "#E8E4DC",
        input: "#E8E4DC",
        ring: "#C5A059",
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
