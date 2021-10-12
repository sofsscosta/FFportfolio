<template>
    <div>
        <p>{{title}}</p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
        await store.dispatch('getProject', {section: 'events', slug})
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