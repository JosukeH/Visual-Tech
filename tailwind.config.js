/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vtwhite: '#f2f2f2',
        vtblack: '#000',
        vtblackligth: '#000',
        vtgray: '#999',
        vtgrayligth: '#b3b3b3'
      }
    },
  },
  plugins: [],
}
