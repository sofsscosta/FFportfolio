<template>
    <section class="w-full">
        <ul class="bg-black w-32">
            <nuxt-link v-for="(separator, index) in separators" :key="index" class="text-white" :to="separator.link">
                {{ separator.name }}
            </nuxt-link>
            <nuxt-link @click.native="handleLogout" class="text-white" to="/admin">
               <p>Logout</p> 
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
                    name: 'About Me',
                    link: '/admin/about'
                }, 
            ]
        }
    },
    methods: {
        async handleLogout() {
            this.$store.dispatch('logout')
        }
    }
})
</script>