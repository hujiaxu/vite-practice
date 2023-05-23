import { render } from "./render";
import { initState } from "./state";

render();
initState();

if (import.meta.hot) {
  import.meta.hot.accept(["./render.ts", "./state.ts"], (newModule) => {
    const [renderModule, stateModule] = newModule;
    if (renderModule) {
      renderModule.render();
    }
    if (stateModule) {
      stateModule.initState();
    }
  });
}
