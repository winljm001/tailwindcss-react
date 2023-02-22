/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        purple: "var(--color-purple)",
        red: "var(--color-red)",
        blue: "var(--color-blue)",
        gray: "var(--color-gray)",
        linkText: "var(--color-link-text)",
      },
    },
  },
  plugins: [],
};
