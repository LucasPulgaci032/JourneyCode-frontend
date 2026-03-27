/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}", 
  ],

  theme: {
    extend: {
      colors:{
        primary: "var(--font-color-primary)",
        secundary: "var(--font-color-secundary)"
      },
      keyframes:{
        glow:{
          "0%" : {boxShadow : " 0 0 10px var(--font-color-secundary)"}, 
          "50%" : {boxShadow : "0 0 20px var(--font-color-secundary)"},
          "100%" :  {boxShadow : "0 0 10px var(--font-color-secundary)"}
        },
        carrousel :{
          "0%" :{
          transform: "translateX(0%)"
        },
        "100%":{
          transform: "translateX(-50%)"
        }
        }
      },
      animation: {
         glow: "glow 2s ease-in-out infinite",  
         carousel : "carrousel 30s linear infinite"
      }
    },
  },
  plugins: [],
};

