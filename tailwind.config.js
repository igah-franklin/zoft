module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "30px",
        sm: "40px",
        lg: "100px",
        xl: "100px",
      },
    },
    extend: {
      colors: {
        primary: "#0B2035",
        secondary: "#ffbe00",
        secondaryAlternative: "#ff914d",
        header: "#083645",
        form: "#101920",
      },
    },
  },
  plugins: [],
};
