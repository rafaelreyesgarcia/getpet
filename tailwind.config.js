/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-rubik)'],
        body: ['var(--font-montserrat)'],
      },
      colors: {
        'dark': '#252525',
        'cream': '#FFF8ED',
        'primary': '#2a9d8f',
        'secondary': '#264653',
        'primary-light': '#d4e4e4',
      }
    },
  },
  plugins: [],
}
