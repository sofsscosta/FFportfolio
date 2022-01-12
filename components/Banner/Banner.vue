<template>
    <div class="w-full relative" :style="{ height: getHeight + 'px' }" @mouseenter="toggleHover(true)" @mouseleave="toggleHover(false)">
        <transition name="fade">
            <div v-if="isHovered" class="absolute h-full w-full" :style="{ backgroundColor: 'rgba(48, 48, 48, 0.384)' }">
                <p class="text-white text-7xl md:text-8xl font-thin w-full h-full text-center flex justify-center items-center">{{section.toUpperCase()}}</p>
            </div>
        </transition>
        <div class="md:hidden absolute h-full w-full" :style="{ backgroundColor: 'rgba(48, 48, 48, 0.384)' }">
            <p class="text-white text-7xl md:text-8xl font-thin w-full h-full text-center flex justify-center items-center">{{section.toUpperCase()}}</p>
        </div>
        <img :src="imageSource" class="w-full object-cover" :style="{ height: getHeight + 'px' }" />
    </div> 
</template>
<script lang="ts">
import Vue from 'vue'
import { headerHeight, convertRemToPixels } from '~/utils'

export default Vue.extend({
    props: {
        imageSource: {
            type: String,
            default: ''
        },
        section: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isHovered: false
        }
    },
    computed: {
        getHeight () {
            if(process.client) return window.innerHeight - convertRemToPixels(headerHeight.split('rem')[0])
        },
    },
    methods: {
        toggleHover(value: boolean) {
            this.isHovered = value
        }
    }
})
</script>

<style scoped>
 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>