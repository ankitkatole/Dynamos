import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 5173, // You can change this port if needed
  },
  build: {
    outDir: "dist", // or your preferred output directory
  },
  publicDir: "public", // Ensure public directory is set if not default
});
