/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#440F0F',
          800: '#952B2B'
        },
        secondary: '#EFECEC',
        linkColor: '#FFC700',
        good: '#9FEF83',
        bad: '#E72C2C'
      },
      boxShadow: {
        'mine': '0px 4px 140px 15px #952B2B'
      }
    },
  },
  plugins: [],
}