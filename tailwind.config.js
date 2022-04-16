module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/landing01.jpg')",
      },
      gridTemplateColumns: {
        fluid: "repeat( auto-fit, minmax(14rem, 1fr) );",
        "fluid-sm": "repeat( auto-fit, minmax(8rem, 1fr) );",
        "fluid-16": "repeat(auto-fit, 16rem);",
        "fluid-24": "repeat(auto-fit, 24rem);",
      },
      grayscale: {
        25: "25%",
        50: "50%",
        75: "75%",
      },
      fontFamily: {
        sans: ["system-ui"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
