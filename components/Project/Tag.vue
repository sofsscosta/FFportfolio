<template>
    <div class="bg-yellow-100 text-center rounded-full p-1 px-2 text-gray-500">
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
    created() {
        console.log(this.tag)
    }
});
</script>