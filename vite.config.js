import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dtsPlugin from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { fileURLToPath } from "url";
import { glob } from "glob";
import postcssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";
import theme from "postcss-material-colors";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dtsPlugin({
      include: ["src"],
      exclude: ["src/**/*.stories.tsx"],
      copyDtsFiles: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        theme({ darkModeStrategy: "class" }),
        postcssPresetEnv(),
        autoprefixer(),
      ],
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
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", {
            ignore: ["src/**/*.stories.tsx"],
          })
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: ({ originalFileName }) => {
          if (!originalFileName) return "[name][extname]";
          const parentFolder = originalFileName.split("/")[1];
          return `assets/${parentFolder}[extname]`;
        },
        entryFileNames: "[name].js",
      },
    },
  },
});
