/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ef4444", // text-main or bg-main
        second: "#a22e2e", // hover:bg-second, etc.
        gray: "#1c1c1c", // optional custom gray
      },
    },
  },
  plugins: [],
};
