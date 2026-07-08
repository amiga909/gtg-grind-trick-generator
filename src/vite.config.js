import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "./",
  // Explicit (empty) PostCSS config so Vite never searches parent
  // directories for one — the repo root used to have the old app's.
  css: { postcss: {} },
});
