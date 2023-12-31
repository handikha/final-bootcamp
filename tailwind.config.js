/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        public: "Public Sans",
      },
      colors: {
        primary: "#0d9488", //teal-600
        danger: "#ef4444", //red-500
        warning: "#eab308", // yellow-500
        secondary: "#64748b", //slate-500
        dark: "#213360",
      },
    },
  },
  plugins: [],
};
