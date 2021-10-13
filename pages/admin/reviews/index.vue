<template>
    <div class="font-light text-gray-500">
        <h2 class="text-3xl mt-14 mb-3 font-thin">REVIEWS</h2>
        <h2 class="font-light mb-10">
            Here you can create, edit or delete reviews. Click on each item to see its details.
        </h2>
        <client-only>
        <ul class="mb-20 w-full px-10" :key="projects && projects.length" v-if="projects.length">
            <div class="flex flex-row justify-between text-lg">
                <p>Title</p>
                <p>Date</p>
                <p>Image Preview</p>
                <p>Actions</p>
            </div>
            <hr>
            <li v-for="(project, index) in projects" :key="index">
                <div class="flex flex-row justify-between items-center">
                    <nuxt-link :to="`/admin/${section}/${project.id}`">
                        <p>{{project.title}}</p>
                    </nuxt-link>
                    <p>{{project.date}}</p>
                    <nuxt-link :to="`/admin/${section}/${project.id}`">
                        <img v-if="project.image_preview || (project.images_preview && project.images_preview.length)" :src="project.image_preview || project.images_preview[0]" width="200" alt="" class="my-2"/>
                    </nuxt-link>
                    <div>
                        <nuxt-link :to="`/admin/reviews/create${project.slug}`" >Add Review</nuxt-link>
                        <button @click.self="handleDelete(project.title, project.id)">Delete</button>
                    </div>
                </div>
                <hr>
            </li>
        </ul>
        </client-only>
        <nuxt-link :to="{ path: section === 'video' ? `/admin/create-video-project` : `/admin/create-project?section=${section}` }" class="w-0">
            <p class="bg-gray-400 rounded-full px-3 py-2 text-white w-min min-w-max">Create Project</p>
        </nuxt-link>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";
import { Project } from '~/types';

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
        const section = this.$route.path.split('/admin/')[1]?.split('/')[0]
        if (!section) this.$router.push('/admin/error')
        this.section = section

        await this.$store.dispatch('getSectionItems', section)
        this.projects = this.$store.state[section].projects
    },
    created() {
        const section = this.$route.path.split('/admin/')[1]?.split('/')[0]
        if (!section) this.$router.push('/admin/error')
        this.section = section
        this.projects = this.$store.state[this.section].projects
    },
    methods: {
        async handleDelete(title: string, id: string) {
            try {
                const isConfirmed = window.confirm(`Are you sure you want to delete ${title}?`)
                if(!isConfirmed) return;
                await firebase.firestore().collection(this.section).doc(id).delete()
                await this.$store.dispatch('getSectionItems', this.section)
                this.projects = this.$store.state[this.section].projects
            } catch(error) {
                console.log(error)
            }
        },
    }
})
</script>