<template>
  <div class="w-screen h-screen bg-gray">
    <section class="flex flex-row">
      <div class="ml-32 w-full z-20">
        <nuxt class="m-8"/>
      </div>
      <Sidebar/>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Sidebar from '~/components/Admin/Sidebar.vue'

export default Vue.extend({

  components: {
    Sidebar
  },
  middleware: 'auth'
});
</script>
