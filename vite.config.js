import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/isla-studio/', // <--- IMPORTANTE: Pon aquí el nombre exacto de tu repo
})