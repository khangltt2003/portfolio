/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 10px 5px black",
      },
      fontSize: {
        big: "2rem",
        normal: "1.2rem",
      },
      colors: {
        main: "#026484",
        second: "#0b94cf",
      },
    },
  },
  plugins: [],
};
