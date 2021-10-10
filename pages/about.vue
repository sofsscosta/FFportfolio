<template>
  <div>
    <img :src="bannerImage" />
    <p>{{ email }}</p>
    <p>Tel: {{ phone }}</p>
    <a :href="`https://instagram.com/${instagram}`" target="_blank">
      <InstagramIcon />
    </a>
    <p>{{ city }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InstagramIcon from "~/assets/InstagramIcon.vue";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

export default Vue.extend({
  components: {
    InstagramIcon,
  },
  data() {
    return {
      bannerImage: "",
      email: "",
      phone: "",
      city: "",
      instagram: "",
      year: 0,
    };
  },
  async fetch() {
    try {
      const storage = firebase.firestore()
      const home = await storage.collection('banners').doc('home').get()
      const image = home.data()?.url
      this.bannerImage = image;

      const db = firebase.firestore();
      const snapshot = await db
        .collection("about")
        .doc("RCNULCtvbhhssWzzZkTI")
        .get();
      const data = snapshot.data();
      if (data) {
        this.email = data.contacts.email;
        this.phone = data.contacts.phone;
        this.city = data.contacts.city;
        this.instagram = data.contacts.instagram;
      }
      this.year = new Date().getFullYear();
    } catch (error) {
      console.error(error);
    }
  },
});
</script>
