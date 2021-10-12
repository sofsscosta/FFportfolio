<template>
    <div class="text-center font-thin mt-10 max-w-6xl mx-auto justify-center">
        <h1 class="text-5xl">{{title}}</h1>
        <h3 class="text-2xl mt-5">{{subtitle}}</h3>
        <div class="flex flex-row mt-8 justify-between items-center">
            <p>Date: {{date}}</p>
            <div class="flex flex-row">
                <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" class="ml-2"/>
            </div>
        </div>
        <p class="text-left text-xl mt-5 tracking-wide">
            {{description}}
        </p>
        <client-only>
            <Grid :items="images" />
        </client-only>
        <!-- <Modal v-if="showModal">
            <template>
                <img :src="selectedImage" alt="">
            </template>
        </Modal> -->
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
    }
})
</script>