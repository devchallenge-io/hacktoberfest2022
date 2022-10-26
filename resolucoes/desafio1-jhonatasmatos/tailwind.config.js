/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx, js,}",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      "transparent": "transparent",

      "black": "#000",
      "white": "#FFF",

      gray: {
        900: "#121214",
        400: "#7c7c8a",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}