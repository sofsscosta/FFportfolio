<template>
    <section class="w-full h-screen fixed">
        <ul class="bg-gray-400 w-32 h-full flex flex-col">
            <nuxt-link v-for="(separator, index) in separators" :key="index" class="text-white text-center h-14 hover:bg-gray-350 rounded justify-center items-center" :class="$route.path == separator.link ? 'bg-gray-350' : ''" :to="separator.link">
                <p class="h-full items-center flex justify-center">{{ separator.name }}</p>
                <div class="h-px bg-gray-350 mx-2"/>
            </nuxt-link>
            <nuxt-link @click.native="$store.dispatch('logout')" class="text-white text-center h-14 hover:bg-gray-350 rounded" to="/admin">
                <p class="h-full items-center flex justify-center">Logout</p>
            </nuxt-link>
        </ul>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";
import "firebase/auth";
export default Vue.extend({
    data() {
        return {
            separators: [
                {
                    name: 'Banners',
                    link: '/admin/banners'
                }, 
                {
                    name: 'Fashion',
                    link: '/admin/fashion'
                }, 
                {
                    name: 'Events',
                    link: '/admin/events'
                }, 
                {
                    name: 'Product',
                    link: '/admin/product'
                }, 
                {
                    name: 'Video',
                    link: '/admin/video'
                }, 
                {
                    name: 'Reviews',
                    link: '/admin/reviews'
                }, 
                {
                    name: 'About Me',
                    link: '/admin/about'
                }, 
            ]
        }
    },
    methods: {
        // async handleLogout() {
        //     this.$store.dispatch('logout')
        // }
    }
})
</script>