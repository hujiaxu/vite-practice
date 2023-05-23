import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import path from "path";
import { terser } from "rollup-plugin-terser";
/**
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  input: ["./src/index.js", "./src/util.js"],
  output: {
    // 产物输出目录
    dir: path.resolve(__dirname, "dist"),
    // 以下三个配置都可以使用这些占位符
    // 1. [name] 去除文件后缀后的文件名
    // 2. [hash] 根据文件名和文件内容生成的hash值
    // 3. [format] 产物模块格式, 如 es, cjs
    // 4. [extname] 产物后缀名(带 '.')
    // 入口模块的输出文件名
    entryFileNames: `[name].js`,
    // 非入口模块(如动态 import) 的输出文件名
    chunkFileNames: `chunk-[hash].js`,
    // 静态资源文件输出文件名
    assetFileNames: `assets/[name]-[hash][extname]`,
    // 产物输出格式, 包括 'amd', 'cjs', 'es', 'iife', 'umd', 'system'
    format: `cjs`,
    // 是否生成 sourcemap 文件
    sourcemap: true,
    // 如果是打包出 iife/umd 格式, 需要对外暴露出一个全局变量, 通过name配置变量名
    name: `MyBundle`,
    // 全局变量声明
    globals: {
      // 项目中可以直接用 '$' 代替 'jquery'
      jquery: "$",
    },
    // 加入 terser 插件, 用来压缩代码
    plugins: [terser()],
  },
  plugins: [resolve(), commonjs()],
};
export default buildOptions;
// /**
//  * @type { import('rollup').RollupOptions }
//  */
// const buildIndexOptions = {
//   input: ["src/index.js"],
//   output: {
//     dir: "dist/esm",
//     format: "esm",
//   },
// };
// /**
//  * @type { import('rollup').RollupOptions }
//  */
// const buildUtilOptions = {
//   input: ["src/util.js"],
//   output: {
//     dir: "dist/esm",
//     format: "esm",
//   },
// };
// export default [buildIndexOptions, buildUtilOptions];
