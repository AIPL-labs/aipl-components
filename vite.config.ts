import react from "@vitejs/plugin-react";
import { defineConfig, Plugin } from "vite";

// Custom MDX preprocessing plugin with TypeScript types
// Custom MDX preprocessing plugin with TypeScript types
function preprocessMDX(): Plugin {
  return {
    name: "preprocess-mdx",
    transform(code: string, id: string) {
      if (id.endsWith(".mdx")) {
        // Separate MDX content from import statements
        const [imports, ...content] = code.split("\n");
        let transformedContent = content.join("\n");

        // Escape HTML tags by replacing < and > with &lt; and &gt;
        transformedContent = transformedContent
          .replace(/</g, "")
          .replace(/>/g, "")
          .replace(/{/g, "")
          .replace(/}/g, "");

        // Recombine the imports with the transformed content
        const transformedCode = [imports, transformedContent].join("\n");

        return {
          code: transformedCode,
          map: null,
        };
      }
      return null;
    },
  };
}
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
