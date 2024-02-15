/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '480px'},
      },
      color: {
        grey: "#A4A1AA",
         buttonColor: "#131118",
      },
    },
  },
  plugins: [],
};
