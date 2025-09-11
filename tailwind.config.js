/** @type {import('tailwindcss').Config} */
module.exports = {
  important: "#app",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.7" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        ripple: "ripple 600ms linear",
      },
      fontSize: {
        "10px": "0.625rem", // 10px
        "12px": "0.75rem", // 12px
        "14px": "0.875rem", // 14px
        "16px": "1rem", // 16px
        "18px": "1.125rem", // 18px
        "20px": "1.25rem", // 20px
        "24px": "1.5rem", // 24px
        "30px": "1.875rem", // 30px
        "36px": "2.25rem", // 36px
        "48px": "3rem", // 48px
        "60px": "3.75rem", // 60px
        "64px": "4rem", // 64px
        "72px": "4.5rem", // 72px
        "96px": "6rem", // 96px
        "128px": "8rem", // 128px
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: ({ colors }) => ({
      pink: colors.pink,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      gray: colors.gray,
      yellow: colors.yellow,
      primary: "#a8d8f0",
      "primary-text": "#414040",
      "primary-text-light": "#616161",
      "primary-text-blue": "#289EF6",
      "primary-text-brown": "#7B5858",
      "primary-text-lighter": "#797979",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      "white-bg": "#F9F9F9",
    }),

    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Menlo", "monospace"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
