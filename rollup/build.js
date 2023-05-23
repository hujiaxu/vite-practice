const rollup = require("rollup");

// 常用 inputOptions 配置
const inputOptions = {
  input: "./src/index.js",
  external: [],
  plugins: [],
};

const outputOptionList = [
  // 常用outputOptions 配置
  {
    dir: "dist/es",
    entryFileNames: `[name].[hash].js`,
    chunkFileNames: `chunk-[hash].js`,
    assetFileNames: `assets/[name]-[hash][extname]`,
    format: "es",
    sourcemap: true,
    globals: {
      lodash: "_",
    },
  },
];

async function build() {
  let bundle;
  let buildFailed = false;
  try {
    // 1. 调用rollup.rollup 生成 bundle对象
    bundle = await rollup.rollup(inputOptions);
    for (const outputOptions of outputOptionList) {
      // 2. 拿到bundle对象, 根据每一份输出配置, 调用generate 和 write 方法分别生成和写入产物
      const { output } = await bundle.generate(outputOptions);
      await bundle.write(outputOptions);
    }
  } catch (error) {
    buildFailed = true;
    console.error(error);
  }
  if (bundle) {
    // 最后调用 bundle.close 方法结束打包
    await bundle.close();
  }
  process.exit(buildFailed ? 1 : 0);
}

build();
