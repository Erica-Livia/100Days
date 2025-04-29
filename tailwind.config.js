/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darker: '#141E24',
        dark: '#283136',
        light: '#F1F7FC',
        strongGold: '#EE8031',
        lightGold: '#F9DF4C',
        darkGold: '#CE9747',
        highlight: '#E82AFC',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {

      },
    },
  },
  plugins: [],
}