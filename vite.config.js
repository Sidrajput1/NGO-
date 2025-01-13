import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src",
      filename: "service_worker.js",
      injectManifest: {
        swSrc: './src/service_worker.js', // Path to the source SW file
      },
      manifest: {
        name: "prabisvg samaj",
        short_name: "prabisvg",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#007bff",
        icons: [
          {
            src: "/asset2/navlogo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/asset2/navlogo512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/asset2/navlogo1024.png",
            sizes: "1024x1024",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/asset2/screenshot1024.png",
            sizes: "1024x768",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/asset2/screenshot1024.png",
            sizes: "1024x768",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/asset2/screenshot768.png",
            sizes: "768x1024",
            type: "image/png",
          },
          {
            src: "/asset2/screenshot768.png",
            sizes: "768x1024",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
