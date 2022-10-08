/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#440F0F", // background color
          800: "#952B2B", // box shadow color
          200: "#EFC6C6", //pinkish color
        },
        secondary: {
          900: "#EFECEC", // for white background
          800: "#E2C8C8", // for main text
          700: "#C88F8F", // for other text
          600: "#611717", // for red background
        },
        linkColor: "#FFC700", // yello for link
        good: "#9FEF83", // green
        bad: "#E72C2C", // red
      },
      boxShadow: {
        mine: "0px 4px 140px 15px #952B2B",
        table: "inset 0 0px 50px 10px rgb(149 43 43 / 0.5)",
      },
      fontFamily: {
        gruppo: ['"Gruppo"'],
        ubuntu: ['"Ubuntu"'],
      },
      spacing: {
        // for width
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
