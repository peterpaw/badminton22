module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat( auto-fit, minmax(16rem, 1fr) );",
        "fluid-sm": "repeat( auto-fit, minmax(8rem, 1fr) );",
        "fluid-16": "repeat(auto-fit, 16rem);",
      },
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
