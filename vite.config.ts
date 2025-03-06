import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://300riel300derm.com",
      exclude: ["/admin"],
      dynamicRoutes: ["/?lang=en", "/?lang=km"],
    }),
  ],
  base: "/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
