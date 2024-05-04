import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: '#C2FFC2',
          100: '#30E87A',
          200: '#16C65C',
          300: '#108F43',
          400: '#0C6E33',
          500: '#094D24',
          600: '#06371A',
          700: '#02160A',
        },
        secondary: {
          50: '#d6cae6',
          100: '#B9A1D6',
          200: '#8B4DFB',
          300: '#6E22FA',
          400: '#5305E6',
          500: '#4204B4',
          600: '#300383',
          700: '#150139',
        },
        dark: {
          50: '#34373c',
          100: '#2b2e33',
          200: '#23262B',
          500: '#1D1E24',
        },
      },
    },
  },
  plugins: [],
};
export default config;
