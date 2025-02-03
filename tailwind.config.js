/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["primaryFont", "sans-serif"],
        secondary: ["secondaryFont", "serif"],
        third: ["thirdFont", "serif"],
      },
      animation: {
        slideUp: "slideUp 3s ease-out forwards", // Animasi slide up
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-200%)" },
        },
      },
    },
  },
  plugins: [],
};
