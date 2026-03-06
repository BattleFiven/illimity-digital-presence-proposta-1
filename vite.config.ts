import { defineConfig } from 'vite'
import path from 'path'
import fs from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    {
      name: 'figma-asset-resolver',
      resolveId(id) {
        if (!id.startsWith('figma:asset/')) return null

        const assetName = id.slice('figma:asset/'.length)
        const pngPath = path.resolve(__dirname, 'src/assets', assetName)
        if (assetName.toLowerCase().endsWith('.png')) {
          const webpPath = pngPath.replace(/\.png$/i, '.webp')
          if (fs.existsSync(webpPath)) {
            return webpPath
          }
        }
        return pngPath
      },
    },
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
