import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    // sourcemap: true,
    commonjsOptions: {},
    target: "esnext",
    // minify: "terser",
    // minify: true,
    // terserOptions: {
    //   mangle: false,
    // },
  },

  base: "",
  plugins: [react()],
  define: {
    __BUILD_TIMESTAMP__: JSON.stringify(new Date().toISOString()),
    __APP_VERSION__: JSON.stringify("0.01 (alpha)"),
  },
});
