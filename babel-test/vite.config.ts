import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    legacy({
      // 设置目标浏览器, browserslist 配置语法
      targets: ["ie >= 11"],
    }),
  ],
});
