/** @type {import('tailwindcss').Config} */
// import {BsFillMoonStarsFill} from "react-icons/fa"
module.exports = {
  darkMode:'class',
  content: ["./public/*.{html,js}",
    "./index.html",],
  theme: {
    screens:{
      sm: '480px',
      mb: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}