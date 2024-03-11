import { createRouter, createWebHistory } from "vue-router";
import { AuthRoutes } from "../auth/presentation/router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: { name: AuthRoutes.LoginPage.name },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "NotFound" },
    },
  ],
});

export default router;
