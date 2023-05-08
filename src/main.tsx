// vite项目里, 一个 import 代表一个 HTTP 请求
// vite 倡导 no-bundle 理念: 利用浏览器原生 ES模块的支持,
// 实现开发阶段的Dev Server,进行模块的按需加载,而不是先整体打包在进行加载
// 相比 webpack, vite 在开发阶段省略了耗时的打包过程

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "virtual:windi.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
