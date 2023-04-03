/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#252525',
        'cream': '#FFF8ED',
        'primary': '#6366F1',
        'secondary': '#3C81F6',
        'primary-light': '#DFDFFD',
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
