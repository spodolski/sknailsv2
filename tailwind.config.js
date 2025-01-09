/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f3f0",
          100: "#e9e7e1",
          200: "#dfdad2",
          300: "#d4cec3",
          400: "#c9c2b4",
          500: "#beb6a4",
          600: "#b3aa95",
          700: "#a99d86",
          800: "#9e9177",
          900: "#938568",
          950: "#938568",
        },
        accent: {
          100: "#84785e",
          200: "#766a53",
          300: "#675d49",
          400: "#58503e",
          500: "#4a4334",
          600: "#3b352a",
          700: "#2c281f",
          800: "#1d1b15",
          900: "#0f0d0a",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
