import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-input": "#232020",
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
      },

      borderColor: {
        "custom-border": "#FF7315",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
export default config;
