import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    // Same-origin proxy so the browser isn't blocked by sandbox/CORS when calling Places
    proxy: {
      '/api/places': {
        target: 'https://places.googleapis.com',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/api\/places/, ''),
      },
    },
  },
  preview: {
    proxy: {
      '/api/places': {
        target: 'https://places.googleapis.com',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/api\/places/, ''),
      },
    },
  },
})
