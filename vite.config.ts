import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";
import windi from "vite-plugin-windicss";
import viteEslint from "vite-plugin-eslint";
import viteStylelint from "vite-plugin-stylelint";
import svgr from "vite-plugin-svgr";
import viteImagemin from "vite-plugin-imagemin";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

const variablePath = normalizePath(path.resolve("./src/css/variable.scss"));
// 是否为 生产环境, 在生产环境 一般会注入 NODE_ENV 这个环境变量, 见下面的环境变量配置
// .env.development NODE_ENV=development
// .env.production NODE_ENV=production
const isProduction = process.env.NODE_ENV === "production";

const CDN_URL = "xxxxxx";

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // 在 css下的@import也会生效
      "@assets": path.resolve(__dirname, "src/assets")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  build: {
    // 8 kb 超过8kb的会单独打包成文件, 低于8kb的会作为 base64格式的字符串內联, svg始终会被打包成单独文件
    assetsInlineLimit: 8 * 1024
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
    }),
    svgr(),
    viteImagemin({
      // 无损压缩配置,无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置,有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9]
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [path.join(__dirname, "src/assets/icons")]
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
  },
  assetsInclude: [".gltf"]
});
