import { defineConfig } from "vite-plugin-windicss";

// attributify: 属性化, 可以用 props的方式去定义属性
export default defineConfig({
  attributify: true,
  shortcuts: {
    "flex-center": "flex justify-center items-center"
  }
});
