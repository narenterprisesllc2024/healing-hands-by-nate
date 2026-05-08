import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#faf7f1",
          100: "#f5f1ea",
          200: "#ede5d5",
          300: "#e0d4ba"
        },
        clay: {
          400: "#c08266",
          500: "#b8654a",
          600: "#9a4f38",
          700: "#7a3e2c"
        },
        bronze: {
          500: "#8b6f47",
          600: "#6f5938",
          700: "#574429"
        },
        stone: {
          400: "#a89e91",
          500: "#6b6259",
          600: "#4a423a",
          700: "#3a342d",
          900: "#2a2622"
        },
        forest: {
          600: "#3d4a3d",
          700: "#2d3a2d",
          800: "#1f2a1f"
        }
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      maxWidth: {
        prose: "65ch",
        wide: "80rem"
      },
      letterSpacing: {
        tightest: "-0.04em"
      }
    }
  },
  plugins: []
};

export default config;
