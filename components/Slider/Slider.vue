<template>
  <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
        <div class="swiper-slide">
            <img :src="slides[0]" alt="">
        </div>
        <div v-if="slides[1]" class="swiper-slide">
            <img :src="slides[1]" alt="">
        </div>
        <div v-if="slides[2]" class="swiper-slide">
            <img :src="slides[2]" alt="">
        </div>
      </div>
      <!-- If we need pagination -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
// import Image from '../../assets/ChevronRight.vue'
Swiper.use([ Navigation, Pagination ])

export default {
  props: {
    slides: []
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: false,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
      autoHeight: true, //enable auto height
    })
  }
}
</script>

<style scoped>
.swiper-container {
  width: 600px;
  height: 100%;
}
.swiper-button-prev {
    color: rgb(148, 148, 148);
}
.swiper-button-next {
    color: rgb(148, 148, 148);
    background-image: url(../../assets/chevron-right.png);
    background-size: cover;
    width: 30px;
    height: 30px;
}
.swiper-button-next::after {
  display:none
}
.swiper-button-prev {
    color: rgb(148, 148, 148);
    background: url(../../assets/chevron-right.png);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    background-size: cover;
    width: 30px;
    height: 30px;
}
.swiper-button-prev::after {
  display:none
}
</style>