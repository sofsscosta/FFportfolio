<template>
  <div>
    <Banner :image-source="bannerImage" section="about"/>
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
      !store.getters['getBanner']('home').bannerUrl && await store.dispatch('getBanner', 'home')
      await store.dispatch('fetchAbout')
    } catch (error) {
      console.error(error);
    }
  },
  async created() {
      this.bannerImage = this.$store.getters['getBanner']('home').bannerUrl
      const { email, phone, city, instagram } = this.$store.state.about.contacts
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.instagram = instagram;
  }
});
</script>
