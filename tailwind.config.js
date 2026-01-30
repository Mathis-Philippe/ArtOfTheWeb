/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'bamboo-dark': '#4A5D44',
        'bamboo-medium': '#7FA074',
        'bamboo-light': '#A3C19A',
        'bamboo-pale': '#C5D5C0',
        'bamboo-footer': '#3E4E38',
        'bamboo-badge': '#9db694',
        'search-bg': '#ddeedd',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
      }
    },
  },
  plugins: [],
}