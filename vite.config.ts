import { ModuleFormat } from "rollup";

import { defineConfig } from "vite";

const packageName = process.env.npm_package_name!;

export default defineConfig({
  build: {
    target: "es5",
    minify: true,
    sourcemap: true,
    lib: {
      entry: "./src/stream.js",
      name: "mithrilStream",
      formats: ["es", "umd"],
      fileName: (format: ModuleFormat) => {
        switch (format) {
          case "es":
            return `${packageName}.module.js`;
          case "umd":
            return `${packageName}.umd.js`;
          default:
            return packageName;
        }
      },
    },
  },
});
