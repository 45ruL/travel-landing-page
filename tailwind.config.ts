import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colors: {
          primary: {
            50: "#EAFAF9",
            100: "#EAFAF9",
            200: "#C1F1EE",
            300: "#97E8E3",
            400: "#6DDED8",
            500: "#44D5CD",
            600: "#25A59E",
            700: "#21928C",
            800: "#176864",
            900: "#0E3E3C",
          },
          secondary: "#EE8F39",
          neutral: {
            50: "#F2F2F2",
            100: "#F2F2F2",
            200: "#D9D9D9",
            300: "#BFBFBF",
            400: "#A6A6A6",
            500: "#8C8C8C",
            600: "#737373",
            700: "#595959",
            800: "#404040",
            900: "#272727",
          },
        },
      },
      fontFamily: {
        galda: ["var(--font-galda)", "Georgia", "serif"],
        urbanist: ["var(--font-urbanist)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
