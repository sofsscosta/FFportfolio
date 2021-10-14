<template>
    <div class="relative">
        <Modal v-if="showModal" @hideModal="handleShowModal(undefined, true)">
            <v-zoomer-gallery
                style="width: 100vw; height: 92vh; background-color: rgba(78, 78, 78, 0.3);"
                :list="images"
                :value="5"
                v-model="selectedImage"
            ></v-zoomer-gallery>
        </Modal>
        <div class="text-center font-thin mt-10 max-w-4xl xl:max-w-6xl mx-auto justify-center mb-10 md:mb-20">
            <h1 class="text-3xl md:text-5xl mx-3 md:mx-0">{{title}}</h1>
            <h3 class="text-xl md:text-2xl mt-3 md:mt-5 mx-3 md:mx-0">{{subtitle}}</h3>
            <client-only>
                <Grid :items="images" @showModal="handleShowModal" class="mt-10 md:mt-20 mb-20 md:mb-32"/>
            </client-only>
            <div class="h-px bg-gray-300 w-full mb-14 md:mb-32"/>
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
            images: [],
            images_preview: [],
            slug: '',
            subtitle: '',
            title: '',
            tags: [],
            showModal: false,
            selectedImage: 0
        }
    },
    async fetch({store, route}) {
        const slug = route.params.slug
        const section = route.path.split('/')[1]
        await store.dispatch('getProject', { section, slug })
    },
    created() {
        const section = this.$route.path.split('/')[1]
        const { id, date, description, images, images_preview, slug, subtitle, title, tags } = this.$store.state[section].selectedProject
        this.id = id
        this.date = date
        this.description = description
        this.images = images
        this.images_preview = images_preview
        this.slug = slug
        this.subtitle = subtitle
        this.title = title
        this.tags = tags
    },
    methods: {
        handleShowModal(imageIndex: number | undefined, hide = false) {
            if (hide) this.showModal = false
            else if (imageIndex !== undefined) {
                this.selectedImage = imageIndex
                this.showModal = true
            }
        }
    }
})
</script>

<style scoped>
.class {
    background-color: rgba(78, 78, 78, 0.3);
}
</style>