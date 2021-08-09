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
    const storage = firebase.storage().ref();
    const allImages = await storage.child("/images").listAll();
    console.log(allImages);

    const image = await allImages.items[0].getDownloadURL();
    this.bannerImage = image;
  },
});
</script>
