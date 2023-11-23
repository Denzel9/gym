/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#383737',
      },
      backgroundImage: {
        training: "url('../training.jpg')",
      },
    },
  },
  plugins: [],
}
