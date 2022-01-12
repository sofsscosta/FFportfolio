<template>
    <div class="text-center text-3xl font-thin">
        <p class="mb-5 mt-20">Ups! Some error occurred!</p>
        <nuxt-link to="/" class="text-2xl bg-gray-100 rounded-full px-3 py-2">Go to home</nuxt-link>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['error'],
    layout: 'error'
})
</script>