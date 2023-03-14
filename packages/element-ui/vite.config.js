import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from "path";
import {alias} from '../../scripts'

export default defineConfig(async ({ command, mode }) => {
    return {
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
        resolve: {
            alias: [
                ...await alias(),
                {
                    find: '@/',
                    replacement: path.join(__dirname, '/')
                }
            ]
        }
    }
}
)
