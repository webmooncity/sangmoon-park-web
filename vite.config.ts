import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'cloudflare-static-worker',
      apply: 'build',
      buildStart() {
        rmSync('dist', { recursive: true, force: true })
      },
      closeBundle() {
        mkdirSync('dist/client', { recursive: true })
        copyFileSync('public/og.png', 'dist/client/og.png')
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
  publicDir: false,
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
  },
})
