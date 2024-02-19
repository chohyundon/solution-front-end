import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};

// ./src/**/*.{js,jsx}