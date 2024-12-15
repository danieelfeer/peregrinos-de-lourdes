/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-dark': '#000000',
        'blue': '#A1C6EA',
        'light-blue': '#E3F2FD',
        'red-blood': '#640606',
        'gold': '#C68E17',
        'text-light': '#333333',
      },
      fontFamily: {
        dm_sans: ['DM Sans', 'sans-serif'],
        darker_grotesque: ['Darker Grotesque', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
