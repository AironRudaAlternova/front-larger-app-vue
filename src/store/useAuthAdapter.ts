import { useUserStore } from "./userStore";
import { storeToRefs } from "pinia";
import type { Primitives } from "@/common/domain/Primitives";
import type { User } from "@/core/user/domain/User.entity";
export const useAuth = () => {
  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);
  const createAuthStore = (authInformation: Primitives<User>) => {
    userStore.clearState();
    userStore.setUser(authInformation);
  };

  return { user, createAuthStore };
};
