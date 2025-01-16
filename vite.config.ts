import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      styles: '/src/styles',
      app: '/src/app',
      store: '/src/store',
      hooks: '/src/hooks',
    },
  },
})
