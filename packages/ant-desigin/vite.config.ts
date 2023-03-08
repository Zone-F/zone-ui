import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3933
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'ant-design']
    },
    lib: {
      entry: path.resolve(__dirname, './components/index.ts'),
      name: 'zoneUi',
      fileName: 'zone-ant-design',
      formats: ['es', 'cjs', 'umd', 'iife']
    }
  },
})
