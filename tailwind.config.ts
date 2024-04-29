import type { Config } from "tailwindcss";

const config: Config = {
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
          100: 'var(--swPrimary-100)',
          300: 'var(--swPrimary-300)',
          400: 'var(--swPrimary-400)',
          500: 'var(--swPrimary-500)',
          600: 'var(--swPrimary-600)',
          700: 'var(--swPrimary-700)',
        },
        orange: {
          500: 'var(--swOrange-500)',
        },
      },
      variables: {
        DEFAULT: {
          swPrimary: {
            100: '#cad2c5',
            300: '#52796f',
            400: '#526c5b',
            500: '#354f52',
            600: '#244c3c',
            700: '#2f3e46',
          },
          swOrange: {
            500: '#fa6e06',
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
