import { Plugin } from "vite";

const virtualFibModuleId = "virtual:fib";
const resolveFibVirtualModuleId = "\0" + virtualFibModuleId;

export default function virtualFibModulePlugin(): Plugin {
  const config: ResolvedConfig | null = null;
  return {
    name: "vite-plugin-virtual-module",
    resolveId(id) {
      if (id === virtualFibModuleId) {
        return resolveFibVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolveFibVirtualModuleId) {
        return "export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }";
      }
    },
  };
}
