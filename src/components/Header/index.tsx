import "./index.scss";
import { ReactComponent as ReactLogo } from "@assets/react.svg";
import Worker from "./worker-example.js?worker";

const worker = new Worker();
worker.addEventListener("message", (e) => {
  console.log(e);
});
const h = "hhh";
const hh = h + h + h;
export function Header() {
  return (
    <p className="header">
      <ReactLogo />
      This is Header {hh}
    </p>
  );
}
