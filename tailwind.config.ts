import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "loginbg": "url('../images/bg-image.png')",
        "chatbg": "url('../images/chat-bg.jpg')"
      },
      colors: {
        "iyte-blue": "#495284",
        "iyte-red": "#9A1220",
        "iyte-red-darker": "#88121E",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
