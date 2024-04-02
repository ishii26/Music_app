/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#002b41",
        background: "#032030",
        header: "#004c72",
        hover: "#004d74",
        textLight: "#FFFFFF",
        textFaded: "#ABABAB",
        border: "#004d74",
      },
      gridTemplateColumns: {
        player: "85px repeat(10, minmax(0, 1fr)) 85px;",
      },
    },
  },
  plugins: [],
};
