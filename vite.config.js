import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  assetsInclude: ['asserts/img/logo.svg'],
  plugins: [react()],
})