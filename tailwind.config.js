/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors: {
        lightGray: '#A6A9B1',
        gray: 'rgba(80, 86, 102, .75)',
        darkPurple: '#460073',
        purple: '#BF84F9'
      }
    },
  },
  plugins: [],
}

