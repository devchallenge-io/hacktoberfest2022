/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}",
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
      "yellow": "#FFCA01",

      green: {
        900: "#00AA25",
        400: "#0AC266"
      },

      blue: {
        900: "#020076",
        400: "#6A68F1",
      },

      purple: {
        900: "#4D11AB",
        400: "#8945F4"
      },

      brown: {
        900: "#75310C",
        400: "#FD813E",
      }
    },
    extend: {
      fontFamily: {
        sans: "'Carter One', cursive, sans-serif"
      },
      backgroundImage: {
        "soccer-field":
        "linear-gradient(to right bottom, rgba(0, 170, 37, 0.75), rgba(255, 202, 1, 0.65)), url('/src/assets/soccer_field.png')",
        "soccer-play":
        "linear-gradient(to right bottom, rgba(2, 0, 118, 0.75), rgba(255, 202, 1, 0.65)), url('/src/assets/soccer_play.jpg')",
        "soccer-trophy":
        "linear-gradient(to right bottom, rgba(255, 202, 1, 0.65), rgba(0, 170, 37, 0.75)), url('/src/assets/world_cup.jpg')"
      }
    },
  },
  plugins: [],
}