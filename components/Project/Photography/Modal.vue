<template>
    <transition name="modal">
        <div class="w-screen h-screen top-0 md:bottom-0 bg-opacity-40 bg-black fixed flex justify-center items-center">
            <button @click.prevent="$emit('hideModal')" class="font-light absolute top-0 text-6xl lg:text-9xl text-white right-0 mr-2 mt-2 md:mr-20 md:mt-20 rotate-45" :style="{zIndex: 1, transform: 'rotate(45deg)'}">+</button>
            <slot />
        </div>
    </transition>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>