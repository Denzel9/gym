/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#383737',
        gold: '#e8aa00',
      },
      backgroundImage: {
        training: "url('../public/training.jpg')",
      },
    },
  },
  plugins: [],
}
