<template>
  <div>
    <NavbarMobile class="block md:hidden" :photography="photography" :video="video"/>
    <NavbarDesktop class="hidden md:block" :photography="photography" :video="video"/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { headerHeight } from '~/utils'
import NavbarDesktop from '~/components/Navbar/NavbarDesktop.vue'
import NavbarMobile from '~/components/Navbar/NavbarMobile.vue'

export default Vue.extend({
  components: { NavbarDesktop, NavbarMobile },
  data() {
    const photography = {
      name: "Photography",
      children: [
        {
          link: "/fashion",
          name: "Fashion",
          id: 1,
        },
        {
          link: "/events",
          name: "Events",
          id: 2,
        },
        {
          link: "/product",
          name: "Product",
          id: 3,
        }
      ]
    }
    const video = {
      link: "/video",
      name: "Video",
    }
    return {
      photography,
      video,
      headerHeight,
      showSubMenu: false
    };
  }
});
</script>