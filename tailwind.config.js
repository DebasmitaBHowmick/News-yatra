 /** @type {import('tailwindcss').Config} */
module.exports= {
   content: ["./src/**/*.{html,js}"],
   darkMode: "class",
   theme: {
     extend: {
      screens: {
        "other": {'min': '640px', 'max': '1200px'}
      }
     },
   },
   plugins: [require('@tailwindcss/line-clamp'),],
 }