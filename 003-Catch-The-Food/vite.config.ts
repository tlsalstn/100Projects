import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import path from "path"

export default defineConfig({
  base: "/",
  mode: "development",
  publicDir: "public",
  plugins: [reactRefresh()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  logLevel: "info",
  clearScreen: true,
  server: {
    host: "localhost",
    port: 3000,
    strictPort: true,
    https: false,
    open: true,
    hmr: true,
    cors: true,
    force: true,
    base: "/dist"
  },
  build: {
    target: "modules",
    outDir: "dist",
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      output: {
        manualChunks: {
          vendor: [
            "node_modules/react/index.js",
            "node_modules/react-dom/index.js",
            "node_modules/styled-components/dist/styled-components.cjs.js"
          ]
        }
      }
    },
    manifest: true,
    minify: "terser",
    terserOptions: {
      compress: true,
      ecma: 2015,
      ie8: true,
      safari10: true
    },
    brotliSize: true
  }
})
