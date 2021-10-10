<template>
  <div class="flex justify-between w-full h-20 px-24 items-center">
    <div
      v-for="element in navbarElements"
      :key="element.id"
      class="
        hover:bg-gray-100
        w-full
        h-full
        flex
        items-center
        justify-center
        flex-col
      "
    >
      <nuxt-link
        :to="element.link"
        class="uppercase font-thin text-center px-2"
        >{{ element.name }}</nuxt-link
      >
      <div
        v-if="$route.path.includes(element.link)"
        class="h-px w-16 text-center bg-gray-600 opacity-60"
      ></div>
    </div>
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
      },
      {
        link: "/video",
        name: "Video",
        id: 4,
      },
    ];
    return {
      navbarElements,
    };
  },
});
</script>