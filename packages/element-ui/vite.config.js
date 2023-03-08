import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3931
    },
    plugins: [vue()],
    build: {
        rollupOptions: {
            external: ['element-ui', 'vue']
        },
        lib: {
            entry: path.resolve(__dirname, './components/index.js'),
            name: 'zoneUi',
            fileName: 'zone-element-ui',
            formats: ['es', 'cjs', 'umd', 'iife']
        }
    },
})
