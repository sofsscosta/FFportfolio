<template>
  <div>
    <Banner :image-source="bannerImage" section="ferran flack"/>
    <section class="font-light text-gray-500 mb-20 flex flex-col w-full items-center mt-20 max-w-7xl mx-auto">
      <p class="text-2xl">{{ description }}</p>
      <section>
        <h3>Contact:</h3>
        <p>{{ email }}</p>
        <p>Tel: {{ phone }}</p>
        <a :href="`https://instagram.com/${instagram}`" target="_blank">
          <InstagramIcon color="rgb(150, 150, 150)"/>
        </a>
        <p>{{ city }}</p>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InstagramIcon from "~/assets/InstagramIcon.vue";
import Banner from '~/components/Images/Banner.vue'

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
      description: ''
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
        this.description = this.$store.state.about.description;
  }
});
</script>
