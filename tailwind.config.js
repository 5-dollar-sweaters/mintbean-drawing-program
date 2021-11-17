module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter"],
        secondary: ["Inter"],
      },
      colors: {
        yllw: "#FFF00D",
        orng: "#FF991A",
        rd: "#C41200",
        pnk: "#FFA8F7",
        prpl: "#913DFF",
        blu: "#008AFF",
        brwn: "#6B3D00",
        gry: "#A8ADAD",
        blck: "#000000",
        wht: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
