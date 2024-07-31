/** @type {import('tailwindcss').Config} */
import("@tailwindcss/typography");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Lora", "serif"],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '2xl': '1.5rem',       // 24px
        '3xl': '1.875rem',     // 30px
        '4xl': '2.25rem',      // 36px
        '5xl': '3rem',         // 48px
        '6xl': '3.75rem',      // 60px
        '8xl': '6rem',         // 96px
        '9xl': '8rem',         // 128px
        '12xl': '12rem',       // 192px
        '13xl': '13rem',       // 192px
        'base': '1rem',        // 16px
        'lg': '1.125rem',      // 18px
        'xl': '1.25rem',       // 20px
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
