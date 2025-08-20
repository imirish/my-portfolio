/** @type {import('tailwindcss').Config} */
module.exports = {
  important: "#app",
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0px) rotate(0deg)" },
          "50%": { transform: "translateX(15px) rotate(6deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 50%, 100%": { opacity: "1" },
          "25%, 75%": { opacity: "0" },
        },
        bouncePixel: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        typeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typeOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
        },
        scrollBg: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        arcade:
          "0 0 6px rgba(0,255,255,0.8), 0 0 14px rgba(255,0,255,0.6), inset 0 0 6px rgba(0,255,255,0.4)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s forwards",
        fadeOut: "fadeOut 0.6s forwards",
        float: "float 4s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        bouncePixel: "bouncePixel 1.2s infinite",
        typeIn: "typeIn 0.4s forwards",
        typeOut: "typeOut 0.4s forwards",
        scrollBg: "scrollBg 30s linear infinite",
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
      primary: "#a8d8f0",
      "primary-dark": "#5A7FA3",
      "primary-darker": "#041522",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      purple: "#d7b8f3",
    }),

    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Menlo", "monospace"],
      arcade: ["Arcade", "sans-serif"],
      arcade2: ["Arcade2", "sans-serif"],
    },
  },
  plugins: [],
};
