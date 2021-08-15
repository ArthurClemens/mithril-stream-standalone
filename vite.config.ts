import { defineConfig } from "vite";
export default defineConfig({
  build: {
    target: "es5",
    minify: true,
    sourcemap: true,
    lib: {
      entry: "./src/stream.js",
      name: "mithrilStream",
      formats: ["es", "umd"],
    },
  },
});
