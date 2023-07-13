/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        hsm: { raw: "(min-height: 600px)" }, // Przykładowy punkt przerwania dla wysokości ekranu
      },
      gridTemplateColumns: {
        auto1fr: "auto 1fr",
        auto3: "auto auto auto",
        auto2: "auto auto",
      },
      gridTemplateRows: {
        auto1fr1fr: "auto 1fr 1fr",
        mobile: "1fr auto",
        auto2: "auto auto",
      },
      height: {
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
