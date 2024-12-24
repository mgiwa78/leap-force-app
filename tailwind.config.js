/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        type: "#1A1A1B",
        text2: "#0B1223",
        primary: "#9CA73A",
        secondary: "#1F72B8",
        secondary_1: "#1D81D4",
        error: "#ff0000"
      }
    },
  },
  plugins: [require("tailwindcss-animate"),],
}

