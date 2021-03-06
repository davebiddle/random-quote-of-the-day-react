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
        mako: {
          100: "#ebeeef",
          200: "#dde2e3",
          300: "#c1cacc",
          400: "#a5b1b5",
          500: "#89989e",
          600: "#6e7f86",
          700: "#57646a",
          800: "#4c575c",
          900: "#414a4f",
        },
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
      lineHeight: {
        18: "3.75rem",
      },
      height: {
        7: "1.7rem",
        13: "3.25rem",
        42: "11.25rem",
      },
      minHeight: {
        44: "16rem",
      },
      padding: {
        14: "3.5rem",
        18: "4.5rem",
      },
      margin: {
        7: "1.75rem",
        18: "4.5rem",
      },
      maxWidth: {
        xxxs: "11rem",
        xxs: "18rem",
      },
      inset: {
        "-12": "-2.5rem",
        "-18": "-4.5rem",
      },
      backgroundImage: (theme) => ({
        "quote-texture": "url('img/old-paper-texture.png')",
      }),
      boxShadow: {
        blockquote: "8px 8px 16px -1px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "odd", "hover", "focus"],
  },
  plugins: [],
};
