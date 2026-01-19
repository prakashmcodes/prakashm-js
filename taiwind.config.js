/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],   // VERY IMPORTANT
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(6) forwards",
      },
      keyframes: {
        typewriter: {
          from: { left: "0%" },
          to: { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};
