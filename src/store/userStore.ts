import { Primitives } from "@/common/domain/Primitives";
import { defineStore } from "pinia";
import type { User } from "@/core/user/domain/User.entity";

export const useUserStore = defineStore("user", {
  state: (): { user: Partial<Primitives<User>> } => ({
    user: {
      id: undefined,
      email: undefined,
      createdAt: undefined,
      updatedAt: undefined,
      metaData: {},
    },
  }),
  actions: {
    setUser(user: Primitives<User>) {
      this.user = user;
    },

    clearState() {
      this.user = {
        id: undefined,
        email: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        metaData: {},
      };
    },
  },
});
