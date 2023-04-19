/// <reference types="vite/client" />
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { alias } from "../../scripts";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [react()],
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
