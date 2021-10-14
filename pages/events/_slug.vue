<template>
    <div class="relative">
        <Modal v-if="showModal" @hideModal="handleShowModal(undefined, true)">
            <v-zoomer-gallery
                style="width: 100vw; height: 100vh; background-color: rgba(78, 78, 78, 0.3);"
                :list="images"
                :value="5"
                v-model="selectedImage"
            ></v-zoomer-gallery>
        </Modal>
        <div class="text-center font-thin mt-10 max-w-6xl mx-auto justify-center">
            <h1 class="text-5xl">{{title}}</h1>
            <h3 class="text-2xl mt-5">{{subtitle}}</h3>
            <div class="flex flex-row mt-8 justify-between items-center">
                <p>Date: {{date}}</p>
                <div class="flex flex-row">
                    <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" class="ml-2"/>
                </div>
            </div>
            <p class="text-left text-xl my-5 tracking-wide">
                {{description}}
            </p>
            <client-only>
                <Grid :items="images" @showModal="handleShowModal" class="mb-20"/>
            </client-only>
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