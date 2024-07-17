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
    extend: {},
  },
  plugins: [],
}

