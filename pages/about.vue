<template>
  <div>
    <Banner :image-source="bannerImage" section="ferran flack"/>
    <section class="font-light text-gray-500 mb-28 flex flex-col w-full items-center mt-20 max-w-7xl mx-auto">
      <p class="text-2xl font-extralight tracking-wide">{{ description }}</p>
      <section class="flex flex-row justify-between mx-auto mt-20 items-center">
        <img :src="image" alt="" :style="{width: '30rem'}" class="mr-20">
        <section class="text-xl font-thin">
          <h3 class="text-3xl mb-5">Contact me!</h3>
          <p class="mb-2">{{ email }}</p>
          <p class="mb-2">Tel: {{ phone }}</p>
          <a :href="`https://instagram.com/${instagram}`" target="_blank" class="mb-2">
            <InstagramIcon color="rgb(150, 150, 150)"/>
          </a>
          <p class="mt-2">{{ city }}</p>
        </section>
      </section>
    </section>
    <section class="text-gray-500">
      <p class="text-6xl font-thin text-center mb-16">REVIEWS</p>
      <ReviewItem v-for="(review, index) in reviews" :key="index" :review="review"/>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InstagramIcon from "~/assets/InstagramIcon.vue";
import Banner from '~/components/Images/Banner.vue'
import ReviewItem from '~/components/Reviews/ReviewItem.vue'

export default Vue.extend({
  components: {
    InstagramIcon,
    Banner,
    ReviewItem
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
