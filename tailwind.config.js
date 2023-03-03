/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultConfig = require('tailwindcss/defaultConfig');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  ...defaultConfig,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...defaultTheme,
    colors: {
      ...colors,
      red: {
        ...colors.red,
        500: '#E53E3E'
      },
      gray: {
        ...colors.gray,
        100: '#F7FAFC',
        800: '#1A202C',
        900: '#171923'
      }
    },
    fontFamily: {
      sans: 'Montserrat, sans-serif',
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
};
