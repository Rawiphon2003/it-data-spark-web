import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/it-data-spark-web/",
  plugins: [react()],
});
