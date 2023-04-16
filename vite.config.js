import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    VitePWA(
      {
        manifest: {
          icons: [
            {
              src: './icon.png', // The path to your app icon
              sizes: [96, 128, 192, 256, 384, 512], // The sizes of your app icon
              type: 'image/png',
              purpose: 'any maskable'
            },
          ],
        }
      }
      )],
})
