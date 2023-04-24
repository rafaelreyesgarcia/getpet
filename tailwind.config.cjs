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
        'primary': '#2a9d8f',
        'secondary': '#264653',
        'primary-light': '#d4e4e4',
      },
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
