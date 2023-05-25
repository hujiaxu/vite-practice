import Server from "react-dom/server";

let Greet = () => <h1>Hello Juejin!</h1>;
console.log(Server.renderToString(<Greet></Greet>));
