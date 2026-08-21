import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative paths so the site works on GitHub Pages (served under /<repo>/)
  base: "./",
  plugins: [react()],
});
