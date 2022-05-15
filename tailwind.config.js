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
      boxShadow: {
        "phone-card-shadow": "0px 0.828624px 0.828624px rgba(0, 0, 0, 0.1);",
        "card-shadow": "0px 1px 1px rgba(0, 0, 0, 0.1);",
        "drawer-shadow": "3px -4px -4px rgba(0, 0, 0, 0.5);",
        "upload-screen-shadow": "0px 1px 4px rgba(0, 0, 0, 0.25);",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/png/hero-image.png')",
        "hero-image-desktop": "url('/src/assets/png/hero-image-desktop.png')",
        "woman-with-phone": "url('/src/assets/png/woman-with-phone.png')",
        "woman-with-phone-desktop":
          "url('/src/assets/png/woman-with-phone-desktop.png')",
        "man-with-laptop": "url('/src/assets/png/man-with-laptop.png')",
        "man-with-laptop-desktop":
          "url('/src/assets/png/man-with-laptop-desktop.png')",
        "gradient-radial-milk":
          "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #F2F2F2 100%)",
        "toggle-gradient":
          " linear-gradient(90deg, #3EC863 6.41%, #32994F 86.35%);",
        "phone-gradient":
          "linear-gradient(180deg, #1647CB 0%, #F9F9F9 68.75%);",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
