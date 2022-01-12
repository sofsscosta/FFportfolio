<template>
    <div class="relative">
        <div class="text-center font-thin mt-6 md:mt-10 max-w-4xl xl:max-w-6xl mx-auto justify-center mb-10 md:mb-20">
            <button @click.prevent="goBack" class="float-left ml-4 md:ml-0 font-light">←</button>
            <h1 class="text-3xl md:text-5xl mx-3 md:mx-0">{{title}}</h1>
            <h3 class="text-xl md:text-2xl mt-3 md:mt-5 mx-3 md:mx-0">{{subtitle}}</h3>
            <div :inner-html.prop="embed" class="w-full mt-6 md:mt-16 mx-auto flex justify-center mb-24"/>
            <div class="h-px bg-gray-300 w-full mb-14"/>
            <div class="flex flex-col mt-8 justify-between text-left mb-5 mx-4 md:mx-0">
                <div v-if="tags && tags.length" class="flex flex-row mb-5 md:mb-8">
                    <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" class="mr-2"/>
                </div>
                <p v-if="date">Date: {{date}}</p>
            </div>
            <p v-if="description" class="text-left text-lg md:text-xl my-5 tracking-wide mb-28 md:mb-52 mx-4 md:mx-0">
                {{description}}
            </p>
        </div>   
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
        !this.$store.state.video.selectedProject.slug && this.$router.push('/error')
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
    },
    methods: {
        goBack() {
            this.$router.push('/' + this.$route.path.split('/')[1])
        }
    }
})
</script>

<style scoped>
.class {
    background-color: rgba(78, 78, 78, 0.3);
}
</style>