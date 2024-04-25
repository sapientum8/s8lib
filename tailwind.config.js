/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./root/**/*.{html,js}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "rgba(var(--bg-color))",
        txt: "rgba(var(--text-color))"
      }
    },
  },
  plugins: [],
}
