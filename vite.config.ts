import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";
import windi from "vite-plugin-windicss";
import viteEslint from "vite-plugin-eslint";
import viteStylelint from "vite-plugin-stylelint";

const variablePath = normalizePath(path.resolve("./src/css/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  plugins: [
    viteEslint(),
    react({
      babel: {
        plugins: ["babel-plugin-styled-components", "@emotion/babel-plugin"]
      }
    }),
    windi(),
    viteStylelint({
      exclude: /windicss|node_modules/
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"]
        })
      ]
    }
  }
});
