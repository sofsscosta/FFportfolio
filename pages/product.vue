<template>
  <div>
    <img :src="bannerImage" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/storage";

export default Vue.extend({
  data() {
    return {
      bannerImage: "",
    };
  },
  async fetch() {
    try {
      const storage = firebase.firestore()
      const product = await storage.collection('banners').doc('product').get()
      const image = product.data()?.url
      this.bannerImage = image;
    } catch (error) {
      console.error(error);
    }
  },
});
</script>
