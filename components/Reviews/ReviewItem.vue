<template>
    <div class="mx-10 text-center mb-16 flex flex-col items-center">
        <p class="text-xl mb-4 max-w-5xl">{{text}}</p>
        <p class="text-sm mb-3">- {{author}}</p>
        <nuxt-link v-if="link" :to="link"><p class="bg-gray-100 rounded-full px-3 py-1 font-thin">See project</p></nuxt-link>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        review: {
            default: {
                id: {
                    type: String,
                    default: ''
                },
                author: {
                    type: String,
                    default: ''
                },
                text: {
                    type: String,
                    default: ''
                },
                link: {
                    type: String,
                    default: ''
                },
            }
        }
    },
    data() { return { ...this.review }}
})
</script>