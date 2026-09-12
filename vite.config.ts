import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/** GitHub Pages project site: https://shreechamundarestaurant.github.io/.com/ */
export default defineConfig({
  base: '/.com/',
  plugins: [react(), tailwindcss()],
})
