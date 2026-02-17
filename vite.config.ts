import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      // Switching to 'classic' forces the compiler to use React.createElement
      jsxRuntime: 'classic', 
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});