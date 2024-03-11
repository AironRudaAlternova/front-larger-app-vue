<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import {
  FormLabel,
  FormField,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const onSubmit = () => {};
</script>

<template>
  <section
    class="flex flex-col items-center justify-center gap-4 w-full h-screen bg-gray-900"
  >
    <form
      class="w-2/4 flex flex-col gap-5 bg-white p-5 shadow-2xl rounded-xl"
      @submit="onSubmit"
    >
      <h1 class="text-2xl font-bold text-center text-gray-900">Login</h1>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="email@email.com"
              v-bind="componentField"
            />
          </FormControl>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              type="password"
              placeholder="**********"
              v-bind="componentField"
            />
          </FormControl>
        </FormItem>
      </FormField>
      <Button type="submit"> Submit </Button>
    </form>
  </section>
</template>
