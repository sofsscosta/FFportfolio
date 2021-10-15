<template>
    <section class="text-xl font-thin">
        <h3 class="text-3xl mb-5">Contact me!</h3>
        <p class="mb-2">{{ email }}</p>
        <p class="mb-2">Tel: {{ phone }}</p>
        <a :href="`https://instagram.com/${instagram}`" target="_blank" class="mb-2">
        <InstagramIcon color="rgb(150, 150, 150)"/>
        </a>
        <p class="mt-2">{{ city }}</p>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import InstagramIcon from "~/assets/InstagramIcon.vue";

export default Vue.extend({
    components: { InstagramIcon },
    props: {
        contact: {  
            default: {
                email: '',
                phone: '',
                city: '',
                instagram: '',
                year: 0
            }
        }
    },
    data() { return { ...this.contact } }
})
</script>