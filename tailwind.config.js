/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rectangle: "rectangle 2.5s ease-in-out infinite",
      },
      keyframes: {
        rectangle: {
          "0%, 100%": {
            transform: "translate(none)",
          },
          "25%": {
            transform: "translateX(100%)",
          },
          "50%": {
            transform: "translateX(100%) translateY(100%)",
          },
          "75%": {
            transform: "translateX(0) translateY(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
