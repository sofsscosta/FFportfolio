<template>
    <masonry :cols="2" :gutter="10">
        <img v-for="(image, index) in items" :key="index" :src="image" alt="" class="mb-2" @click="$emit('showModal', index)"/>
    </masonry>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        items: {
            required: true,
            type: Array,
        }
    }
})
</script>