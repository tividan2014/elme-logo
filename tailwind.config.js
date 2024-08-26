/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        6: '6px',
      },
      colors: {
        body: {
          DEFAULT: '#f8f8f8',
        },
      },
      transitionDuration: {
        2000: '2000ms', //TODO unused
      },
    },
  },
  plugins: [],
}
