<template>
  <div class="flex justify-between w-full h-20 px-24 items-center">
    <nuxt-link
      v-for="element in navbarElements"
      :key="element.id"
      :to="element.link"
      class="uppercase font-thin hover:font-light"
      >{{ element.name }}</nuxt-link
    >
  </div>
</template>
<script lang="ts">
import Vue from "vue";

interface NavbarElement {
  link: string;
  name: string;
  id: number;
}

export default Vue.extend({
  data() {
    const navbarElements: NavbarElement[] = [
      {
        link: "/about",
        name: "About Me",
        id: 0,
      },
      {
        link: "/fashion",
        name: "Fashion",
        id: 0,
      },
      {
        link: "/events",
        name: "Events",
        id: 0,
      },
      {
        link: "/personal",
        name: "Personal",
        id: 0,
      },
      {
        link: "/product",
        name: "Product",
        id: 0,
      },
      {
        link: "/video",
        name: "Video",
        id: 0,
      },
      // Not sure yet
      {
        link: "/reviews",
        name: "Reviews",
        id: 0,
      },
    ];
    return {
      navbarElements,
    };
  },
});
</script>
