/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["MADE Sunflower", ...defaultTheme.fontFamily.sans],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        celeste: "#ccfff9",
        "charleston-green": "#212826",
        "spanish-blue": "#246EB9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
