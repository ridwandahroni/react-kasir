/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
      primary: '#6CADFF',
      secondary:'#F5F5F5',
    },
    fontFamily:{
      'kaushan': ['Kaushan Script', 'cursive']
    }
  },
  },
  plugins: [],
}