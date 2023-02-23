/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "rgba(var(--color-base), <alpha-value>)",
        purple: "rgba(var(--color-purple), <alpha-value>)",
        red: "rgba(var(--color-red), <alpha-value>)",
        blue: "rgba(var(--color-blue), <alpha-value>)",
        gray: "rgba(var(--color-gray), <alpha-value>)",
        link: "rgba(var(--color-link), <alpha-value>)",
      },
      screens: {
        mobile: { max: "768px" },
      },
    },
  },
  plugins: [],
};
