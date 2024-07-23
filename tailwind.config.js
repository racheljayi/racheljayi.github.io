/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      bricela: ['Bricela',"sans-serif"],
      motterdam: ['Motterdam',"sans-serif"],
      phantomSans: ['Phantom Sans',"sans-serif"]
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 45s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-104%)" },
        }
      },
      colors: {
        rachelBlue: '#265681',
        rachelCream: '#FFF7EE',
      },
    },
  },
  plugins: [],
}

