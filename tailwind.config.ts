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
        Blue: "#4399c0", //blue
        Red: "#de666d", //red
        Turq: "#47a0a3", //turq
        Indigo: "#204f64", //indigo
        Green: "#c2c849", //green
        Yellow: "#ebb842", //yellow
        Grey: "#cccccc", //grey
      },
      animation: {
        appear: "appear_motion 0.5s ease-out forward",
        disappear: "disappear_motion 0.5s ease-out forward",
      },
      keyframes: {
        appear_motion: {
          "0%": { transform: "translate(0,-10%)", visibility: "hidden" },
          "20%": { transform: "translate(0,-10%)", visibility: "visible" },
          "100%": { transform: "translate(0,0%)", visibility: "visible" },
        },
        disappear_motion: {
          "0%": { transform: "translate(0,0%)", visibility: "visible" },
          "80%": { transform: "translate(0,-10%)", visibility: "visible" },
          "100%": { transform: "translate(0,-10%)", visibility: "hidden" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  safelist: [
    {
      pattern: /(bg|text|border)-(Blue|Red|Turq|Indigo|Green|Yellow|Grey)/,
    },
    "animation-appear",
    "animation-disappear",
  ],
};
export default config;
