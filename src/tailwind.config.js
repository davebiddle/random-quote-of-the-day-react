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
        "neon-carrot-lighter": "#fff1e5ff",
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
        blockquote: "ChunkFivePrint",
      },
      fontSize: {
        m: "0.9rem",
        "1.5xl": "1.3rem",
        "3.5xl": ["2rem", "42px"],
        "4xl": ["2.25rem", "47px"],
      },
      height: {
        7: "1.7rem",
        13: "3.25rem",
      },
      padding: {
        14: "3.5rem",
      },
      maxWidth: {
        xxs: "18rem",
      },
      backgroundImage: (theme) => ({
        "quote-texture": "url('img/old-paper-texture.png')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
