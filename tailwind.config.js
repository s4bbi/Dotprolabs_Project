/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rR: "Raleway-Regular",
        rSB: "Raleway-SemiBold",
        nmR: "NeueMachina-Regular",
        nmUB: "NeueMachina-Ultrabold",
        cSB: "Conthrax-SemiBold",
      },
      colors: {
        bgBlue: "#071624",
      }
    },
  },
  plugins: [],
}