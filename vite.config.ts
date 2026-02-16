import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Use path.resolve to provide an absolute path to the src folder
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
  // Ensure Vite is looking inside the 'client' folder for index.html
  root: "client",
  build: {
    // Put the final build in the 'dist' folder at the very root
    outDir: "../dist",
    emptyOutDir: true,
  },
});