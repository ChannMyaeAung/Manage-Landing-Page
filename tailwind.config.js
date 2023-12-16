/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      boxShadow: {
        BrightRedShadow: "1px 3px 4px 1px rgba(242,95, 58, 0.6)",
        BrightRedShadowHover: "2px 4px 5px 1px rgba(242,95, 58, 0.6)",
        LightGrayShadow: "1px 3px 4px 1px rgba(250,250,250, 0.6)",
        LightGrayShadowHover: "2px 4px 5px 1px rgba(250,250,250, 0.6)",
      },
    },
  },
  plugins: [],
};
