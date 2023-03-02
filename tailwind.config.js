/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      red: {
        ...colors.red,
        500: '#E53E3E'
      },
      gray: {
        ...colors.gray,
        800: '#1A202C',
        100: '#F7FAFC'
      }
    },
    fontFamily: {
      sans: 'Montserrat, sans-serif',
    }
  },
  plugins: [],
};
