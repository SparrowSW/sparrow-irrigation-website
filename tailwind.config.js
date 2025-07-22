import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#192952",
        secondary: "#4A90E2",
        "light-blue": "#E8F2FF",
        accent: "#F8FAFC",
        "text-dark": "#1E293B",
        "text-light": "#64748B",
        success: "#10B981",
        warning: "#F59E0B",
      },
      animation: {
        "gradient-shift": "gradient 14s ease infinite",
        float: "float 12s ease-in-out infinite",
        "fade-up": "fade-up 1.4s ease-out forwards",
      },
      keyframes: {
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%": { transform: "translateY(0vh) translateX(0vw)" },
          "25%": { transform: "translateY(-10vh) translateX(4vw)" },
          "50%": { transform: "translateY(-1vh) translateX(-5vw)" },
          "75%": { transform: "translateY(-12vh) translateX(3vw)" },
          "100%": { transform: "translateY(0vh) translateX(0vw)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(80px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;