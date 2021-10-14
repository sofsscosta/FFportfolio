<template>
    <div class="relative">
        <div class="text-center font-thin mt-10 max-w-xl mx-auto justify-center">
            <h1 class="text-5xl">{{title}}</h1>
            <h3 class="text-2xl mt-5">{{subtitle}}</h3>
            <div :inner-html.prop="embed" class="w-full mt-10 mx-auto flex justify-center mb-24"/>
        </div>
        <div class="flex flex-row my-8 justify-between items-center font-thin max-w-5xl mx-auto">
            <p>Date: {{date}}</p>
            <div class="flex flex-row">
                <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" class="ml-2"/>
            </div>
        </div>
        <p v-if="description" class="text-left text-xl my-5 tracking-wide font-thin max-w-5xl mx-auto justify-center mb-28">
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