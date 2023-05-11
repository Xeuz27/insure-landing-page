/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryCyan: "#2acfcf",
        primaryDarkViolet: "#3b3054",
        secondaryRed: '#f46262',
        neutralGray: 'hsl(0, 0%, 75%)',
        neutralGrayishViolet: "hsl(257, 7%, 63%)",
        neutralVeryDarkViolet: "hsl(255, 11%, 22%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}