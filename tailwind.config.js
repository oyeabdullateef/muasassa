/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    extend: {
      colors: {
        whiteColor: "#ffffff",
        blackColor: "#0f0b0b",
        greenColor: "#2c6e18",
        greenColorLight: "#249b00",
        greenColorLighter: "#3cb018",
        darkColor: "#20453e",
        darkColorLight: "#171717",
        offWhite1: "#efffe5",
        offWhite2: "#f8f8f8",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
    fontFamily: {
      oswald: ["oswald", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
      PlayfairDisplay: ["Playfair Display", "san-serif"],
    },
  },
  plugins: [],
};
