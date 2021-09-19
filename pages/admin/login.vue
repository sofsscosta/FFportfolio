<template>
  <form class="flex flex-col m-auto items-center" @submit.prevent="submitLogin">
    <input
      type="email"
      placeholder="Email"
      v-model="email"
      value
      autocomplete
      class="field"
    />
    <input
      type="password"
      placeholder="Password"
      v-model="password"
      value
      autocomplete
      class="field"
    />
    <button
      class="w-min text-6xl rounded-lg bg-yellow-50 px-10 hover:bg-yellow-200"
    >
      👀
    </button>
    <div v-if="error" class="mt-5 text-red-400">{{ error.message }}</div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async submitLogin() {
      try { 
        await this.$store.dispatch('logIn', { email: this.email, password: this.password })
        return this.$router.push("/admin");
      } catch (error) {
        this.error = error
      }
    },
  },
});
</script>

<style scoped>
.field {
  @apply w-72 h-10 rounded border border-gray-400 px-3 mb-5;
}
</style>
