import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves a project site from /<repo>/, so assets need that
// prefix. Local dev and the Tauri desktop build both serve from the root,
// so the prefix is applied only when building for Pages.
const base = process.env.GITHUB_ACTIONS ? '/School/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  build: {
    // Keeps the per-route chunks small enough that the warning is noise.
    chunkSizeWarningLimit: 700,
  },
})
