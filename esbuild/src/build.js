const { build, buildSync, serve } = require("esbuild");

async function runBuild() {
  // 异步方法, 返回一个Promise
  const result = await build({
    // -------- 以下是常见的配置 -------
    // 当前项目根目录
    absWorkingDir: process.cwd(),
    // 入口文件列表, 为一个数组
    entryPoints: ["./src/index.jsx"],
    // 打包产物目录
    outdir: "dist",
    // 是否需要打包, 一般设为true
    bundle: true,
    // 模块格式,包括 'esm', 'commonjs', 和 'iife'
    format: "esm",
    // 需要排除打包的依赖列表
    external: [],
    // 是否开启自动拆包
    splitting: true,
    // 是否生成 Sourcemap 文件
    sourcemap: true,
    // 是否生成打包的元信息文件
    metafile: true,
    // 是否进行代码压缩
    minify: false,
    // 是否开启 watch 模式, 在watch模式下 代码变动则会触发重新打包
    watch: false,
    // 是否将产物写入磁盘
    write: true,
    // Esbuild 内置了一系列的 loader, 包括 base64, binary, css, dataurl, file, js(x), ts(x), text, json
    // 针对一些特殊的文件, 调用不同的loader 进行加载
    loader: {
      ".png": "base64",
    },
  });
  serve(
    {
      port: 8000,
      // 静态资源目录
      servedir: "./dist",
    },
    {
      absWorkingDir: process.cwd(),
      entryPoints: ["./src/index.jsx"],
      bundle: true,
      format: "esm",
      splitting: true,
      sourcemap: true,
      ignoreAnnotations: true,
      metafile: true,
    }
  ).then((server) => {
    console.log("HTTP Server starts at port", server.port);
  });
  console.log(result);
}

runBuild();
