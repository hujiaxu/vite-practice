import "./index.scss";

const h = "hhh";
const hh = h + h + h;
export function Header() {
  return <p className="header">This is Header {hh}</p>;
}
