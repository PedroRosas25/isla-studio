/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#007AFF', // Azul oficial
        'brand-dark': '#292A2C', // Gris carbón
        'brand-cream': '#F5F2EB', // Crema
        'brand-grey': '#B0B0B0', // Gris medio
      }
    },
  },
  plugins: [],
}