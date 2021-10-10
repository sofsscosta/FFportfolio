<template>
  <div>
    <Banner :image-source="bannerImage" section="video"/>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/4Ng28guH9dE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from '~/components/Images/Banner.vue'

export default Vue.extend({
  data() {
    return {
      bannerImage: "",
    };
  },
  components: {
    Banner
  },
  async fetch({store}) {
    try {
      !store.getters['getBanner']('video').bannerUrl && await store.dispatch('getBanner', 'video')
    } catch (error) {
      console.error(error);
    }
  },
  created() {
      this.bannerImage = this.$store.getters['getBanner']('video').bannerUrl
  }
});
</script>
