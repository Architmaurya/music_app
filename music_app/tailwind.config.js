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
        primary :'#122117',
       secondary:'#38E07A',
       field:'#264533',

  
      }
    },
  },
  plugins: [],
};