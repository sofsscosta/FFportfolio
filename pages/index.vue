<template>
  <div>
    <Banner :image-source="bannerImage" section="ferran flack"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from '~/components/Images/Banner.vue'

export default Vue.extend({
  components: { Banner },
  data() {
    return {
      bannerImage: "",
    };
  },
  async fetch({store}) {
    try {
      !store.getters['getBanner']('home').bannerUrl && await store.dispatch('getBanner', 'home')
    } catch (error) {
      console.error(error);
    }
  },
  created() {
      this.bannerImage = this.$store.getters['getBanner']('home').bannerUrl
  }
});
</script>
