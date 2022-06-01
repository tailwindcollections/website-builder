module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      colors: {
        blue: {
          600: "#006FF9",
        },
      },
    },
  },
  plugins: [],
};
