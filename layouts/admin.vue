<template>
  <div class="w-screen h-screen bg-gray">
    <section class="flex flex-row">
      <Sidebar/>
      <nuxt/>
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
});
</script>
