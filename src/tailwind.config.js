module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        genoa: "#167070",
        "faded-jade": "#46857d",
        orange: "#fe6625",
        "neon-carrot": "#fd9230",
        "astronaut-blue": "#003d59",
        mako: "#414a4f",
        white: "#ffffff",
      },
      fontFamily: {
        serif: [
          "ChunkFiveRegular",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
      },
      fontSize: {
        "1.5xl": "1.3rem",
        "4xl": ["2.25rem", "47px"],
      },
      maxWidth: {
        xxs: "18rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
