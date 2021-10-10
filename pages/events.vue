<template>
  <div>
    <Banner :image-source="bannerImage" section="about"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from '~/components/Images/Banner.vue'

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
