import "./index.scss";
import { ReactComponent as ReactLogo } from "@assets/react.svg";
import Worker from "./worker-example.js?worker";
import SvgIcon from "../SvgIcon";

// 批量引入图片
const icons = import.meta.glob("@assets/react*.svg", { eager: true });
// 转换为路径
const iconUrls = Object.values(icons).map((mod) => {
  const fileName = mod.default.split("/").pop();
  const [svgName] = fileName.split(".");
  return svgName;
});

const worker = new Worker();
worker.addEventListener("message", (e) => {
  console.log(e);
});
const h = "hhh";
const hh = h + h + h;
export function Header() {
  return (
    <p className="header">
      {iconUrls.map((item) => (
        // <img src={item} key={item} alt="" />
        <SvgIcon name={item} key={item} width="50" height="50" />
      ))}
      This is Header {hh}
    </p>
  );
}
