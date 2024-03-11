import "./assets/styles/styles.config.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerModules } from "./registerModules";
import * as Auth from "./auth";

registerModules({
  Auth,
});

createApp(App).use(router).mount("#app");
