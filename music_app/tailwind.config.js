/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // ✅ all route screens
    "./components/**/*.{js,jsx,ts,tsx}" // ✅ reusable UI
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary :'#030014',
       seecondary:'#151312',
     light:{
        100:'#D6C6FF',
        200:'#A8B5DB',
        300:'#9CA4AB',
      },
      dark:{
        100:'#221f3d',
        200:'#0f0d23'
      },
       accent :'#AB8BFF',
      }
    },
  },
  plugins: [],
};