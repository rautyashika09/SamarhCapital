/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       'gothamb': ['GOTHAM', 'BOOK'],
       'gotham': ['GOTHAM', 'MEDIUM'],
       'playfairdisplayb': ['PLAYFAIRDISPLAY', 'BOLD'],
       'playfairdisplayi': ['PLAYFAIRDISPLAY', 'ITALIC'],
       'playfairdisplay': ['PLAYFAIRDISPLAY', 'REGULAR'],
      },
    },
  },
  plugins: [],
}

