<template>
    <masonry :cols="2" :gutter="10">
        <img v-for="(item, index) in items" :key="index" :src="item" alt="" class="mb-2"/>
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