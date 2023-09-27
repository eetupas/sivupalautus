/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.js"],
  theme: {
    extend: {
      colors: {
        primary: "#A1DBE3",
        secondary: "#A1DBE3",
        secondarydark: "#9B50CE",
        secondarylight: "#7D31AF",
        light: "#FFFCF7",
        dark: "#333333"
      },
      backgroundImage: {
        banner: "url('/images/nature-inspiration-trees-blue.jpg')"
      }
    },
  },
  plugins: [],
}