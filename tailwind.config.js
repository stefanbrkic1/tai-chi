/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["Generalsans", "sans-serif"],
        generalbold: ["BoldGeneral", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        tsushima: ["Tsushima", "sans-serif"],
        drukwide: ["DrukWideBold", "sans-serif"],
      },
      colors: {
        primary: "#ED4747",
        secondary: "#2D2D2D",
        grey: "#F7F5F5",
        white: "#ffffff",
        black: "#252525",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
