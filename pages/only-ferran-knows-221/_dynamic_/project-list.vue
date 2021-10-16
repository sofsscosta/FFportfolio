<template>
    <div class="font-light text-gray-500">
        <h2 class="text-3xl mt-14 mb-3 font-thin">
            {{ section.toUpperCase() }}
        </h2>
        <h2 class="font-light mb-10">
            Here you can create, edit or delete projects for the {{ section }} section. Click on each item to see its details.
        </h2>
        <client-only>
        <ul class="grid mb-20 w-full px-10" :key="projects && projects.length" v-if="projects.length">
            <div class="grid grid-class text-lg">
                <p>Title</p>
                <p>Date</p>
                <p>Image Preview</p>
                <p>Actions</p>
            </div>
            <hr>
            <li v-for="(project, index) in projects" :key="index">
                <div class="grid grid-class items-center">
                    <nuxt-link :to="`/only-ferran-knows-221/${section}/${project.id}`">
                        <p>{{project.title}}</p>
                    </nuxt-link>
                    <p>{{project.date}}</p>
                    <nuxt-link :to="`/only-ferran-knows-221/${section}/${project.id}`">
                        <img v-if="project.image_preview || (project.images_preview && project.images_preview.length)" :src="project.image_preview || project.images_preview[0]" width="auto" alt="" class="my-2 h-32"/>
                    </nuxt-link>
                    <div>
                        <!-- <button @click.prevent="changeProjectOrder('up', project.id)"></button>
                        <button @click.prevent="changeProjectOrder('down', project.id)"></button> -->
                        <div class="flex flex-col items-start">
                            <nuxt-link :to="`/only-ferran-knows-221/reviews/create${project.slug}`" class="bg-gray-100 rounded-full px-2 py-1 w-min min-w-max mb-1" >Add Review</nuxt-link>
                            <button @click.self="handleDelete(project.title, project.id)" class="ml-2">Delete</button>
                        </div>
                    </div>
                </div>
                <hr>
            </li>
        </ul>
        </client-only>
        <nuxt-link :to="{ path: section === 'video' ? `/only-ferran-knows-221/create-video-project` : `/only-ferran-knows-221/create-project?section=${section}` }" class="w-0">
            <p class="bg-gray-400 rounded-full px-3 py-2 text-white w-min min-w-max">Create Project</p>
        </nuxt-link>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";
import { Project } from '~/types';
import { ErrorTypes } from '~/utils/errorMessages'
import { truncate } from '~/utils/index'

export default Vue.extend({
    layout: 'admin',
    data() {
        const projects: Project[] = []
        return {
            projects,
            section: ''
        }
    },
    async fetch() {
        const section = this.$route.path.split('/only-ferran-knows-221/')[1]?.split('/')[0]
        if (!section) this.$router.push('/only-ferran-knows-221/error')
        this.section = section

        await this.$store.dispatch('getSectionItems', section)
        this.projects = this.$store.state[section].projects
    },
    created() {
        const section = this.$route.path.split('/only-ferran-knows-221/')[1]?.split('/')[0]
        if (!section) this.$router.push('/only-ferran-knows-221/error')
        this.section = section
        this.projects = this.$store.state[this.section].projects
    },
    methods: {
        async handleDelete(title: string, id: string) {
            try {
                this.$store.dispatch('feedback', ErrorTypes.SUBMITTING)
                const isConfirmed = window.confirm(`Are you sure you want to delete ${title}?`)
                if(!isConfirmed) return;
                await firebase.firestore().collection(this.section).doc(id).delete()
                await this.$store.dispatch('getSectionItems', this.section)
                this.projects = this.$store.state[this.section].projects
                this.$store.dispatch('feedback', ErrorTypes.SUCCESS)
            } catch(error) {
                this.$store.dispatch('feedback', ErrorTypes.ERROR)
            }
        },
        changeProjectOrder(upOrDown: boolean, projectId: string) {
            // await firebase.firestore().collection(this.section)
        },
        truncate
    }
})
</script>
<style scoped>
.grid-class {
    grid-template-columns: 1fr 0.5fr 1fr 0.5fr;
    column-gap: 2rem;
}
</style>