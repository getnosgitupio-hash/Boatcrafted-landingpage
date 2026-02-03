/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // all React components
  ],
  theme: {
    extend: {
      fontFamily: {
        onest: ['"Onest"', "sans-serif"],
        brewfine: ['"Brewfine"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        alber: ["Albert Sans", "sans-serif"],
        nicky: ["Nicky Sans", "sans-serif"],
      },

      colors: {
        brandGreen: "#6DB54A",
        brandBlack: "#1E1E1E",
      },

      animation: {
        "slide-left": "slideLeft 35s linear infinite",
        "slide-right": "slideRight 35s linear infinite",

        // ⭐ NEW animations
        zoomPulse: "zoomPulse 2s ease-in-out infinite",
        ctaBounce: "ctaBounce 1.6s ease-in-out infinite",
      },

      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },

        // ⭐ NEW keyframes
        zoomPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        ctaBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
    },
  },
  plugins: [],
};
