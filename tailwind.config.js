/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.php"],
  theme: {
    extend: {
      colors: {
        'verde-tierra': '#625834',
        'verde-oliva': '#a59132',
        'blanco-crema': '#fffef8',
        'blanco-off-white': '#f7f3e4',
        'blanco-sucio': '#d3caa8',
        'marron-compost': '#221f13',
        'blanco': '#ffffff'
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        display: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}