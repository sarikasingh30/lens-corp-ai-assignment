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
        ImgAnime: {
          "0%, 100%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
        },
        meetAI: {
          from: { "background-position": 0 % 0 } /* Start from left */,
          to: { "background-position": -200 % 0 },
        },
      },
      animation: {
        slideAnimation: "slideAnimation 12s linear infinite",
        ImgAnime: "ImgAnime 5s ease-in-out infinite",
        meetAI: "meetAI 3s linear infinite",
      },
    },
    plugins: [],
    corePlugins: {
      preflight: false, // Disable preflight to prevent Tailwind from resetting clip-path
    },
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
