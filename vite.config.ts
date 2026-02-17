import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()], // This plugin is supposed to handle the React definition
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
  // ADD THIS SECTION TO FIX THE "REACT IS NOT DEFINED" ERROR
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});