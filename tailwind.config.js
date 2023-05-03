/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        bananasitalic: "bananas-italic",
        robotomono: "roboto-mono",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
