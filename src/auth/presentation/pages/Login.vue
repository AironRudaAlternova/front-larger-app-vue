<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import {
  FormLabel,
  FormField,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginController } from "../controllers/useLogin.controller";
import { reactive } from "vue";

const {
  isLoadingSignIn,
  errorMessage,
  signInEvent,
  signInWithGithub,
} = useLoginController()

const signInData = reactive({
  userEmail: "",
  userPassword: "",
});

const onSubmit = async () => {
  const userEmail = signInData.userEmail;
  const userPassword = signInData.userPassword;
  await signInEvent(userEmail, userPassword);
};

const onLoginWithGithub = async () => {
  await signInWithGithub();
}
</script>

<template>
  <section
    class="flex flex-col items-center justify-center gap-4 w-full h-screen bg-gray-900"
  >
    <p class="text-white" v-if="errorMessage">{{ errorMessage }}</p>
    <section class="w-2/4 bg-white p-5 shadow-2xl rounded-xl">
      <form 
        class="w-full flex flex-col gap-5 "
        @submit.prevent="onSubmit"
      >
        <h1 class="text-2xl font-bold text-center text-gray-900">Login</h1>
        <FormField name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                required
                type="email"
                placeholder="email@email.com"
                v-model="signInData.userEmail"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField  name="password">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input
                required
                type="password"
                placeholder="**********"
                v-model="signInData.userPassword"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <Button type="submit">
          <span class="text-white" v-if="isLoadingSignIn">Loading...</span> 
          <span v-else>Login</span>
        </Button>
      </form>
      <hr>
      <Button @click="onLoginWithGithub" type="button" class="w-full mt-4">
        <span class="text-white" v-if="isLoadingSignIn">Loading...</span> 
        <span v-else>Login with Github</span>
      </Button>
    </section>
  </section>
</template>
