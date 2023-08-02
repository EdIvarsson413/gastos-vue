import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias : [
      { find: '@', replacement: fileURLToPath( new URL( './src', import.meta.url ) ) },
      { find: '@cmp', replacement: fileURLToPath( new URL( './src/components', import.meta.url ) ) },
      { find: '@ass', replacement: fileURLToPath( new URL( './src/assets', import.meta.url ) ) },
    ]
  }
})