import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
"primary":"#09988a",
"secondary":"#00000050"
      },
      colors:{
        "brand-color":"#09988a",
        "black-dark":"#00000050",
        "dull-white":"#FFFFFF30",
        "white-light":"#FFFFFF30",
        "white-medium":"#FFFFFF40"
        
      }
    },
  },
  plugins: [],
};
export default config;
