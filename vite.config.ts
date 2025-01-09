import { /*extname, relative,*/ resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dtsPlugin from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
// import { fileURLToPath } from "node:url";
// import { glob } from "glob";
import theme from "postcss-material-colors";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dtsPlugin({
      include: ["src/**/*.tsx", "src/**/*.ts"],
      exclude: ["src/**/*.stories.tsx", "src/vite-end.d.ts"],
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  css: {
    postcss: {
      plugins: [theme({ darkModeStrategy: "class" })],
    },
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
