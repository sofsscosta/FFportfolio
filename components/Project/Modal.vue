<template>
    <transition name="modal">
        <div class="w-screen h-screen bg-opacity-40 bg-black">
            <slot name="image"/>
        </div>
    </transition>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>