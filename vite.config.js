import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Miraj Portfolio',
        short_name: 'Miraj',
        description: 'Portfolio website of Miraj Ali – MERN Developer',
        theme_color: '#0ff',
        background_color: '#000',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'largeIcon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})