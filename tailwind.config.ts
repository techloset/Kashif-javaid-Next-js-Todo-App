import { IBM_Plex_Mono } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Stint_Ultra_Condensed: ["Stint Ultra Condensed", "serif"],
      IBM_Plex_Mono: ["IBM Plex Mono", "monospace"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-input": "#232020",
        "custom-home-color": "#EA5455",
        "custom-signup": "rgba(244, 244, 244, 0.42)",
        "custom-todo1": "#FDFBDA",
        "custom-todo2": "#413543",
        "custom-todo3": "#F9F5EB",
        "custom-todo4": "#009FBD",
        "custom-todo5": "#F45050",
        "custom-todo6": "#F3EFE0",
        "custom-todo7": "#CCF0C3",
        "custom-todo8": "#E6E6D4",
        "custom-todo9": "#2E4F4F",
        "custom-text-todo1": "#2D4659",
        "custom-text-todo2": "#F0EB8D",
        "custom-text-todo3": "#EA5455",
        "custom-text-todo4": "#210062",
        "custom-text-todo5": "#F0F0F0",
        "custom-text-todo6": "#222222",
        "custom-text-todo7": "#4A0E5C",
        "custom-text-todo8": "#FFBE00",
        "custom-text-todo9": "#CBE4DE",
        "custom-background-color": "#D9D9D9",
      },

      borderColor: {
        "custom-border": "#FF7315",
        "custom-border1": "#2D4659",
        "custom-border2": "#F0EB8D",
        "custom-border3": "#210062",
        "custom-border4": "#F0F0F0",
        "custom-border5": "#EA5455",
        "custom-border-todo1": "#819F7F",
        "custom-border-todo2": "#8F43EE",
        "custom-border-todo3": "#002B5B",
        "custom-border-todo4": "#77037B",
        "custom-border-todo5": "#F9D949",
        "custom-border-todo6": "#22A39F",
        "custom-border-todo7": "#BCA3CA",
        "custom-border-todo8": "#005874",
        "custom-border-todo9": "#2C3333",
      },
    },
    fontSize: {
      "10px": "10px",
      "20px": "20px",
      "28px": "28px",
      "30px": "30px",
      "25px": "25px",
      "100px": "100px",
      "124px": "124px",
      "64px": "64px",
    },
  },
  plugins: [],
};
export default config;
