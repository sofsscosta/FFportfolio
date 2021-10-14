<template>
  <div class="fixed z-10 w-full">
    <div class="flex justify-between items-center px-5 bg-white " :style="{height: headerHeight}">
      <nuxt-link to="/about">
        <img src="../../assets/man-profile-silhouette-23.png" alt="" class="h-10 w-10 fill" :style="{filter: 'opacity(30%)'}">
      </nuxt-link>
      <div class="flex flex-row h-full">
        <div 
          class="w-full
            h-full
            flex
            items-center
            justify-center
            flex-col
            hover:bg-gray-100 px-2"
            @click.prevent="toggleSubMenu(!showSubMenu)"
          >
          <div
            class="uppercase font-thin text-center"
            >{{ photography.name }}</div
          >
          <div
            v-if="photography.children.find(el => $route.path.includes(el.link))"
            class="h-px w-full text-center bg-gray-600 opacity-60"
          ></div>
        </div>
        <div class="w-full
            h-full
            flex
            items-center
            justify-center
            flex-col
            hover:bg-gray-100 px-2"
            >
          <nuxt-link
            :to="video.link"
            class="uppercase font-thin text-center"
            >{{ video.name }}</nuxt-link
          >
          <div
            v-if="$route.path.includes(video.link)"
            class="h-px w-full text-center bg-gray-600 opacity-60"
          ></div>
        </div>
      </div>
    </div>
    <div v-if="showSubMenu" class="h-40 w-full flex items-end justify-end" @click.prevent="toggleSubMenu(false)">
      <div class="bg-white h-40 flex flex-col" style="width: 8rem; margin-right: 5rem;">
          <nuxt-link
            v-for="(child, index) in photography.children" :key="index"
            :to="child.link"
            class="uppercase font-thin text-center px-6 py-3 hover:bg-gray-100"
            >{{ child.name }}</nuxt-link
          >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { headerHeight } from '~/utils'

export default Vue.extend({
    props: {
        photography : {
            type: Object,
            required: true
        },
        video : {
            type: Object,
            required: true
        },
    },
    data() {
        return {
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