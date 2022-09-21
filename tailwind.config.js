/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '90vh':'90vh'
      },
      width: {
        '90vw':'90vw'
      },
      inset: {
        '50%': '50%',
        '-5%':'-5%'
      },
      translate: {
        '-50%': '-50%'
      }
    },
  },
  plugins: [],
}
