<template>
  <div class="w-full p-5 bg-gray-100">
    <p>© {{ year }} Ferran Pamiès Flack</p>
    <p>{{ email }}</p>
    <p>Tel: {{ phone }}</p>
    <a
      :href="`https://instagram.com/${instagram}`"
      target="_blank"
      @mouseenter="hover(true)"
      @mouseleave="hover(false)"
    >
      <InstagramIcon :color="isHovered ? '#FFFFFF' : ''" />
    </a>
    <p>{{ city }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import InstagramIcon from "~/assets/InstagramIcon.vue";
import firebase from "firebase/app";
import "firebase/database";

export default Vue.extend({
  components: {
    InstagramIcon,
  },
  data() {
    return {
      email: "",
      phone: "",
      city: "",
      instagram: "",
      year: 0,
      isHovered: false,
    };
  },
  async fetch() {
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
  },
  methods: {
    hover(value: boolean) {
      this.isHovered = value;
    },
  },
});
</script>