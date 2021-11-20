const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Abril Fatface", ...defaultTheme.fontFamily.sans],
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
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
      backgroundImage: {
        "card-background":
          "url('https://www.photos-public-domain.com/wp-content/uploads/2011/01/yellow-notebook-paper-texture.jpg')",
        "purple-grad":
          "url('https://img.chainimage.com/images/purple-gradient-background-83.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
