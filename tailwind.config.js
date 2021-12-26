module.exports = {
  content: ["./public/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryWine: {
          500: "#6B2737",
          50: "#DFD1D4",
          100: "#E1D4D7",
        },
        secondaryOrange: {
          500: "#E08E45",
        },
        alternateLightYellow: {
          500: "#F5F3CB",
          600: "#BDBB93"
        },
      },
      backgroundImage: {
        "tiltedBar-patterns": "url(/public/Images/Tilted-bar-patterns.svg)",
        "circle-patterns": "url(/public/Images/CirclePatterns.svg)"
      },
    },
  },
  plugins: [],
};
