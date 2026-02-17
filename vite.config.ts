import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // The 'react' plugin handles the JSX transformation automatically
  plugins: [react()], 
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
  // This explicitly tells the compiler to provide 'React' to every file
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});