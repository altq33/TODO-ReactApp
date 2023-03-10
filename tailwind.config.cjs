/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "70%": "70%"
      },
      fontFamily: {
        ProductSans: "ProductSans",
      },
      colors: {
        transparent: "transparent",
        "gray-point": "#C9D1D3",
        "side-bg": "#E5E5E5",
        "green-point": "#42B883",
        "btn-color": "#4DD599",
        "blue-point": "#64C4ED",
        "grey-point": "#C9D1D3",
        "pink-point": "#FFBBCC",
        "light-green-point": "#B6E6BD",
        "purple-point": "#C355F5",
        "salmon-point": "#FF6464",
        "sb-border": "#F1F1F1",
        "close-btn-bg": "#5C5C5C",
        gray: "#767676",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
