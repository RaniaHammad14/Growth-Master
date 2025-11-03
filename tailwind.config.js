/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        accent: "#A78BFA",
        mainText: "#111827",
        smallText: "#4B5563",
        cardsText: "#0a5ce2",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        header: "url('/src/resources/subtle-prism.svg')",
        animated: "url('/src/resources/Animated Shape.svg')",
      },
      fontWeight: {
        semiMedium: "450",
      },
    },
  },
  plugins: [],
};
