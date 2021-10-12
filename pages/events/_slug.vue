<template>
    <div class="relative">
        <Modal v-if="showModal" @hideModal="handleShowModal(false)">
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
                <Grid :items="images" @showModal="handleShowModal"/>
            </client-only>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Tag from '~/components/Project/Tag.vue'
import Grid from '~/components/Project/Grid.vue'
import Modal from '~/components/Project/Modal.vue'

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
        await store.dispatch('getProject', { section: 'events', slug })
    },
    created() {
        const { id, date, description, images, images_preview, slug, subtitle, title, tags } = this.$store.state.events.selectedProject
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
        handleShowModal(imageIndex: number | false) {
            if (!imageIndex) this.showModal = false
            else {
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