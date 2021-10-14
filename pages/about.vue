<template>
  <div>
    <Banner :image-source="bannerImage" section="ferran flack"/>
    <section class="font-light text-gray-500 mb-16 flex flex-col w-full items-center mt-20 max-w-7xl mx-auto">
      <p class="text-lg md:text-2xl font-extralight tracking-wide mx-3 md:mx-0">{{ description }}</p>
      <section class="flex flex-col md:flex-row justify-between mx-auto mt-20 items-center">
        <img :src="image" alt="" :style="{width: '30rem'}" class="px-6 md:px-0 md:mr-20">
        <Contact :contact="{email, phone, city, instagram, year}" class="mt-10 md:mt-0"/>
      </section>
    </section>
    <div class="h-px w-full bg-gray-300 mt-20 mb-16"/>
    <section class="text-gray-500 mb-20 mt-20 md:mt-0">
      <p class="md:hidden text-4xl font-thin text-center mb-16">REVIEWS</p>
      <ReviewItem v-for="(review, index) in reviews" :key="index" :review="review"/>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/Images/Banner.vue'
import ReviewItem from '~/components/Reviews/ReviewItem.vue'
import Contact from '~/components/Contact/Contact.vue'

export default Vue.extend({
  components: {
    Banner,
    ReviewItem,
    Contact
  },
  data() {
    return {
      bannerImage: "",
      email: "",
      phone: "",
      city: "",
      instagram: "",
      year: 0,
      description: '',
      image: '',
      reviews: []
    };
  },
  async fetch({store}) {
    try {
      !store.getters['getBanner']('home').bannerUrl && await store.dispatch('getBanner', 'home')
      !store.state.reviews && await store.dispatch('fetchReviews')
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
      this.image = this.$store.state.about.image;
      this.reviews = this.$store.state.reviews
  }
});
</script>
