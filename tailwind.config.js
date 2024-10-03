/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        "max-950px": { max: "950px" },
      },
    },
  },
  plugins: [],
};
