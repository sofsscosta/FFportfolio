<template>
    <section class="w-full h-screen fixed">
        <ul class="bg-gray-400 w-32 h-full flex flex-col">
            <nuxt-link v-for="(separator, index) in separators" :key="index" class="text-white text-center h-14 hover:bg-gray-350 rounded justify-center items-center" :class="$route.path == separator.link ? 'bg-gray-350' : ''" :to="separator.link">
                <p class="h-full items-center flex justify-center">{{ separator.name }}</p>
                <div class="h-px bg-gray-350 mx-2"/>
            </nuxt-link>
            <button @click.prevent="$store.dispatch('logout')" class="text-white text-center h-14 hover:bg-gray-350 rounded">
                <p class="h-full items-center flex justify-center">Logout</p>
            </button>
        </ul>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import "firebase/auth";
export default Vue.extend({
    data() {
        return {
            separators: [
                {
                    name: 'Banners',
                    link: '/only-ferran-knows-221/banners'
                }, 
                {
                    name: 'Fashion',
                    link: '/only-ferran-knows-221/fashion'
                }, 
                {
                    name: 'Events',
                    link: '/only-ferran-knows-221/events'
                }, 
                {
                    name: 'Product',
                    link: '/only-ferran-knows-221/product'
                }, 
                {
                    name: 'Video',
                    link: '/only-ferran-knows-221/video'
                }, 
                {
                    name: 'Reviews',
                    link: '/only-ferran-knows-221/reviews'
                }, 
                {
                    name: 'About Me',
                    link: '/only-ferran-knows-221/about'
                }, 
            ]
        }
    },
})
</script>