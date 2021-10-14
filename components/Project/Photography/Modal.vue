<template>
    <transition name="modal">
        <div class="w-screen bottom-0 fixed flex justify-center items-center" :style="{height: getHeight }">
            <button @click.prevent="$emit('hideModal')" class="font-light absolute top-0 text-6xl lg:text-9xl text-white right-0 mr-2 mt-2 md:mr-20 md:mt-20 rotate-45" :style="{zIndex: 1, transform: 'rotate(45deg)'}">+</button>
            <slot />
        </div>
    </transition>
</template>
<script lang="ts">
import Vue from 'vue'
import { headerHeight, convertRemToPixels } from '~/utils'
export default Vue.extend({
    computed: {
        getHeight() {
            return window.innerHeight - convertRemToPixels(headerHeight.split('rem')[0]) + 'px'
        }
    }
})
</script>