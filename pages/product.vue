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
      const storage = firebase.storage().ref();
      const allImages = await storage.child("/images").listAll();
      const image = await allImages.items[0].getDownloadURL();
      this.bannerImage = image;
    } catch (error) {
      console.error(error);
    }
  },
});
</script>
