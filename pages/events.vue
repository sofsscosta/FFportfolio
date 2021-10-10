<template>
  <div>
    <Banner :image-source="bannerImage"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from '~/components/Images/Banner.vue'
import firebase from "firebase/app";
import "firebase/storage";

export default Vue.extend({
  components: {
    Banner
  },
  data() {
    return {
      bannerImage: "",
    };
  },
  async fetch({store}) {
    try {
      !store.getters['getBanner']('events').bannerUrl && await store.dispatch('getBanner', 'events')
    } catch (error) {
      console.error(error);
    }
  },
  created() {
      this.bannerImage = this.$store.getters['getBanner']('events').bannerUrl
  }
});
</script>
