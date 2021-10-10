<template>
  <div>
    <Banner :image-source="bannerImage"/>
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
import Banner from '~/components/Images/Banner.vue'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

export default Vue.extend({
  components: {
    InstagramIcon,
    Banner
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
  async fetch({store}) {
    try {
      !store.getters['getBanner']('about') && await store.dispatch('getBanner', 'about')
    } catch (error) {
      console.error(error);
    }
  },
  async created() {
      this.bannerImage = this.$store.getters['getBanner']('about').bannerUrl
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
  }
});
</script>
