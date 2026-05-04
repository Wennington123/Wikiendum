import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wiki-bg': '#f6f6f6', 
        'wiki-paper': '#ffffff', 
        'wiki-accent': '#f4f1ea', 
        'wiki-text-primary': '#202122', 
        'wiki-text-secondary': '#54595d', 
        'wiki-link': '#36b', 
      },
    },
  },
  plugins: [],
};
export default config;