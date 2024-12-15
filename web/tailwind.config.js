/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fafafa',
        black: '#000000',
        darkGray: '#101314',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-white': theme('colors.white'),
          '--color-black': theme('colors.black'),
          '--color-dark-gray': theme('colors.darkGray'),
        },
      });
    },
  ],
};
