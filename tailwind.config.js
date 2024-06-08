/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'red': '#DB3E25',
        'bg-dark': '#17191E',
        'input-dark': '#242731',
        'text-grey': '#8F989C',
        'light-grey': '#eceef2'
      },
    },
  },
  plugins: [],
}

