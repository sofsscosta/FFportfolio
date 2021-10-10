<template>
    <div>
        <img :src="imageSource" class="w-full object-cover" :style="{height: getHeight + 'px'}"/>
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
        }
    }
    ,
    computed: {
        getHeight () {
            if(process.client) return window.innerHeight - convertRemToPixels(headerHeight.split('rem')[0])
        }
    },
    mounted() {
        console.log(this.$props.imageSource, 'imageSource')
    }
})
</script>