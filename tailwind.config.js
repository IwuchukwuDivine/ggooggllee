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
        'light-grey': '#eceef2',
        'blue': '#1841d2',
        'favicon': '#EBEEF0',
        'text-grey-2':'#9599a9',
        'light-black': '#3f4e55',
        'dark-border': '#21272a',
        'dark-blue': '#7166A9',
        'dark-light': '#dadfe1',
        'dark-grey-2': '#afb3c1'
      },
    },
  },
  plugins: [],
}

