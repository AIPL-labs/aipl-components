import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

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

    lib: {
      entry: "src/index.ts",
      name: "AiplComponents",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },

  base: "",
  plugins: [
    react({ babel: { plugins: [["module:@preact/signals-react-transform"]] } }),

    dts({
      outDir: "dist",
      // outputDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  define: {
    __BUILD_TIMESTAMP__: JSON.stringify(new Date().toISOString()),
    __APP_VERSION__: JSON.stringify("0.01 (alpha)"),
  },
});
