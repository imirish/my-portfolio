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
      },
      animation: {
        fadeIn: "fadeIn 0.6s forwards",
        fadeOut: "fadeOut 0.6s forwards",
      },
      keyframes: {
        typeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typeOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
        },
      },
      animation: {
        typeIn: "typeIn 0.4s forwards",
        typeOut: "typeOut 0.4s forwards",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
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
      // Add more colors as needed
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Menlo", "monospace"],
      chev: ["Chev", "sans-serif"],
      scratch: ["Scratch", "sans-serif"],
      quickpencil: ["QuickPencil", "sans-serif"],
    },
  },
  plugins: [],
};
