import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "@honkhonk/vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
});
