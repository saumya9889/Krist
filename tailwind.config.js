/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '480px'},
      },
      fontFamily: {
        'auto': 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      colors: {
        lightGrey:"#00000099",
        grey: "#A4A1AA",
         buttonColor: "#131118",
      },
      gridTemplateColumns: {
        '4max': 'repeat(4, max-content)',
        '3max': 'repeat(3, max-content)',
        '2max': 'repeat(2, max-content)',
        '175px-1fr': '175px 1fr',
        '250px-1fr': '250px 1fr',
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.grid-4max': {
    //       'grid-template-columns': 'repeat(4, max-content)',
    //     },
    //   };
    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // },
  ],
};
