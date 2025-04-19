import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // --- Add this 'base' property for GitHub Pages ---
  base: "/<Alyssa-Profile>/", // TODO: Replace <repository-name> with your repo name! e.g., "/Alyssa-Profile/"
  // --------------------------------------------------

  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})