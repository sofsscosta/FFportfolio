<template>
    <div class="relative">
        <div class="text-center font-thin mt-10 max-w-6xl mx-auto justify-center mb-48 md:mb-20">
            <h1 class="text-3xl md:text-5xl mx-3 md:mx-0">{{title}}</h1>
            <h3 class="text-xl md:text-2xl mt-3 md:mt-5 mx-3 md:mx-0">{{subtitle}}</h3>
            <div :inner-html.prop="embed" class="w-full mt-6 md:mt-10 mx-auto flex justify-center mb-24 h-48"/>
        </div>
        <div class="h-px bg-gray-300 w-full mb-14 md:mb-32"/>
        <div class="flex flex-col mt-8 justify-between text-left mb-5 mx-4 md:mx-0 font-thin">
            <div v-if="tags && tags.length" class="flex flex-row mb-5 md:mb-8">
                <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" class="mr-2"/>
            </div>
            <p v-if="date">Date: {{date}}</p>
        </div>
        <p v-if="description" class="font-thin text-left text-base md:text-xl my-5 tracking-wide mb-28 md:mb-52 mx-4 md:mx-0">
            {{description}}
        </p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Tag from '~/components/Project/Tag.vue'
import Grid from '~/components/Project/Photography/Grid.vue'
import Modal from '~/components/Project/Photography/Modal.vue'

export default Vue.extend({
    components: { Tag, Grid, Modal },
    data() {
        return {
            id: '',
            date: '',
            description: '',
            embed: [],
            image_preview: [],
            slug: '',
            subtitle: '',
            title: '',
            tags: [],
        }
    },
    async fetch({store, route}) {
        const slug = route.params.slug
        await store.dispatch('getProject', { section: 'video', slug })
    },
    created() {
        const { id, date, description, embed, image_preview, slug, subtitle, title, tags } = this.$store.state.video.selectedProject
        this.id = id
        this.date = date
        this.description = description
        this.embed = embed
        this.image_preview = image_preview
        this.slug = slug
        this.subtitle = subtitle
        this.title = title
        this.tags = tags
    }
})
</script>

<style scoped>
.class {
    background-color: rgba(78, 78, 78, 0.3);
}
</style>