<template>
  <div>
    <img :src="bannerImage" />
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
