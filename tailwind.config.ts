import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Lê tudo dentro da pasta app (onde estão nossas páginas de verdade)
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Deixei preparado para quando criarmos componentes separados (como botões e a busca)
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