/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#292A2C', // Gris oscuro oficial
        'brand-blue': '#007AFF', // Azul vibrante oficial
        'brand-cream': '#F5F2EB', // Fondo claro o textos destacados
        'brand-grey': '#B0B0B0', // Gris medio
      },
    },
  },
  plugins: [],
}