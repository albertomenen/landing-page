import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#74E6A1',  // Rosa suave
        secondary: '#4C585C', // Morado claro
        accent: '#FFFFFF',    // Morado más oscuro
        dark: '#04080F', 
        'dark-6': '#333333'    // Un gris oscuro para contrastar
      }
    }
  },
  plugins: [require("tailgrids/plugin")],
};

export default config;
