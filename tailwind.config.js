const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  darkMode: 'class', // or 'media' or 'class'
  content: ['./*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
