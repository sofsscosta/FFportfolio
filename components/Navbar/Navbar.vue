<template>
  <div class="fixed z-10 w-full">
    <div class="flex justify-between items-center px-3 md:px-24 bg-white " :style="{height: headerHeight}">
      <nuxt-link to="/about">
        <img src="../../assets/man-profile-silhouette-23.png" alt="" class="h-16 w-16 fill" :style="{filter: 'opacity(30%)'}">
      </nuxt-link>
      <div class="flex flex-row pl-20 h-full">
        <div 
          class="w-full
            h-full
            flex
            items-center
            justify-center
            flex-col
            hover:bg-gray-100"
            @mouseenter="toggleSubMenu(true)" @mouseleave="toggleSubMenu(false)"
          >
          <div
            class="uppercase font-thin text-center px-10"
            >{{ photography.name }}</div
          >
          <div
            v-if="photography.children.find(el => $route.path.includes(el.link))"
            class="h-px w-6/12 text-center bg-gray-600 opacity-60"
          ></div>
        </div>
        <div class="w-full
            h-full
            flex
            items-center
            justify-center
            flex-col
            hover:bg-gray-100"
            >
          <nuxt-link
            :to="video.link"
            class="uppercase font-thin text-center px-10"
            >{{ video.name }}</nuxt-link
          >
          <div
            v-if="$route.path.includes(video.link)"
            class="h-px w-6/12 text-center bg-gray-600 opacity-60"
          ></div>
        </div>
      </div>
    </div>
    <div v-if="showSubMenu" class="h-40 w-full flex items-end justify-end" @mouseenter="toggleSubMenu(true)" @mouseleave="toggleSubMenu(false)">
      <div class="bg-white h-40 flex flex-col" style="width: 12rem; margin-right: 13.75rem;">
          <nuxt-link
            v-for="(child, index) in photography.children" :key="index"
            :to="child.link"
            class="uppercase font-thin text-center px-10 py-3 hover:bg-gray-100"
            >{{ child.name }}</nuxt-link
          >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { headerHeight } from '~/utils'

interface NavbarElement {
  link?: string;
  name: string;
  id: number;
  children: {
    link: string,
    name: string,
    id: number,
  }[] | []
}

export default Vue.extend({
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
    const navbarElements: NavbarElement[] = [
      {
        name: "Photography",
        id: 0,
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
    },
    {
        link: "/video",
        name: "Video",
        id: 4,
        children: []
    },
    ];
    return {
      navbarElements,
      photography,
      video,
      headerHeight,
      showSubMenu: false
    };
  },
  methods: {
    toggleSubMenu(value: boolean) {
      this.showSubMenu = value
    }
  }
});
</script>