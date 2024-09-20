/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "Dark-Blue(Dark-Mode-Elements)": "hsl(209, 23%, 22%)",
      "Very-Dark-Blue-(Dark-Mode-Background)": "hsl(207, 26%, 17%)",
      "Very-Dark-Blue-(Light-Mode-Text)": "hsl(200, 15%, 8%)",
      "Dark-Gray-(Light-Mode-Input)": "hsl(0, 0%, 52%)",
      "Very-Light-Gray-(Light-Mode-Background)": "hsl(0, 0%, 98%)",
      "White-(Dark-Mode-text-Light-Mode-Elements)": "hsl(0, 0%, 100%)",
      "outline-dark": "hsl(207, 26%, 16%)",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    fontWeight: {
      normal: 300,
      bold: 600,
      extrabold: 800,
    },
    extend: {},
  },
  plugins: [],
};
