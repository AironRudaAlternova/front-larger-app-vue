import type { Router, RouteRecordRaw } from "vue-router";

const LoginPage = () => import("@/auth/presentation/pages/Login.vue");

export const AuthRoutes = Object.freeze({
  LoginPage: {
    path: "/",
    name: "loginPage",
  },
});

const moduleRoute: RouteRecordRaw = {
  path: "",
  children: [
    {
      path: AuthRoutes.LoginPage.path,
      name: AuthRoutes.LoginPage.name,
      component: LoginPage,
    },
  ],
};

export default (router: Router) => {
  router.addRoute(moduleRoute);
};
