import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, writeFileSync } from 'node:fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'cloudflare-static-worker',
      apply: 'build',
      closeBundle() {
        mkdirSync('dist/server', { recursive: true })
        writeFileSync(
          'dist/server/index.js',
          `export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request)
  },
}\n`,
        )
      },
    },
  ],
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
  },
})
