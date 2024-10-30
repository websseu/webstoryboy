import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        black: "var(--black)",
        black100: "var(--black100)",
        black200: "var(--black200)",
        black300: "var(--black300)",
        black400: "var(--black400)",
        black500: "var(--black500)",
        white: "var(--white)",
        white100: "var(--white100)",
        white200: "var(--white200)",
        white300: "var(--white300)",
        white400: "var(--white400)",
        white500: "var(--white500)",
      },
      fontFamily: {
        nanum: ["var(--fontN)", "sans-serif"],
        nexon: ["var(--fontX)", "sans-serif"],
        gmarket: ["var(--fontG)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
