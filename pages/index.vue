<template>
  <div>
    <img :src="bannerImage" class="h-screen w-full object-cover"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from '~/components/Images/Banner.vue'
import firebase from "firebase/app";
import "firebase/storage";

export default Vue.extend({
  data() {
    return {
      bannerImage: "",
    };
  },
  async fetch({store}) {
    try {
      !store.getters['getBanner']('home') && await store.dispatch('getBanner', 'home')
    } catch (error) {
      console.error(error);
    }
  },
  created() {
      this.bannerImage = this.$store.getters['getBanner']('home').bannerUrl
  }
});
</script>
