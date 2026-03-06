/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#007AFF', 
        'brand-dark': '#292A2C', 
        'brand-cream': '#F5F2EB', 
        'brand-grey': '#B0B0B0', 
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}