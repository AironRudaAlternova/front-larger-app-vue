import type { Router } from "vue-router";
import router from "./router";

interface IModule {
  router: (router: Router) => void;
}

const registerModule = (module: IModule) => {
  if (module.router) {
    module.router(router);
  }
};

export const registerModules = (modules: any) => {
  Object.keys(modules).forEach((moduleKey: string) => {
    const module = modules[moduleKey];
    registerModule(module);
  });
};