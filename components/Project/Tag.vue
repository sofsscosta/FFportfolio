<template>
    <div class="bg-gray-200 text-center rounded-full p-1 px-2 text-gray-500 text-xs md:text-base">
        {{ tag }}
    </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: { 
        tag: {
            type: String,
            required: true,
            default: ''
        } 
    },
});
</script>