/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { alias } from "../../scripts";
// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: "./RTLInVitest.setup.ts",
      coverage: {
        reporter: [ 'text', 'json', 'html' ]
      }
    },
    server: {
      port: 3933,
    },
    build: {
      rollupOptions: {
        external: ["react", "react-dom", "ant-design"],
      },
      lib: {
        entry: path.resolve(__dirname, "./components/index.ts"),
        name: "zoneUi",
        fileName: "zone-ant-design",
        formats: ["es", "cjs", "umd", "iife"],
      },
    },
    resolve: {
      alias: [
        ...(await alias()),
        {
          find: "@/",
          replacement: path.join(__dirname, "/"),
        },
      ],
    },
    css:{
      preprocessorOptions:{
        less:{
          javascriptEnabled:true
        }
      }
    }
  };
});
