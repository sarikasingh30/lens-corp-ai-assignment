/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideAnimation: {
          "0%": {
            transform: "translateX(0)",
            opacity: 1,
          },

          "20%": {
            transform: "translateX(0)",
            opacity: 1,
          },
          "54%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "56%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "90%": {
            transform: "translateX(0)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      animation:{
        slideAnimation:"slideAnimation 12s linear infinite"
      },
    },
    plugins: [],
  },
};

// const withMT = require("@material-tailwind/html/utils/withMT");

// exports = withMT({
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {},
//   plugins: [],
// });
