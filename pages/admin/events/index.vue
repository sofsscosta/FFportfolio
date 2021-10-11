<template>
    <div class="font-light text-gray-500">
        <h2 class="text-3xl mt-14 mb-3 font-thin">
            EVENTS
        </h2>
        <h2 class="font-light mb-10">
            Here you can create, edit or delete projects for the events section. Click on each item to see it's details.
        </h2>
        <ul class="mb-20 w-full px-10">
            <div class="flex flex-row justify-between text-lg">
                <p>Title</p>
                <p>Date</p>
                <p>Image Preview</p>
                <p>Actions</p>
            </div>
            <hr>
            <li v-for="(project, index) in projects" :key="index">
                <div class="flex flex-row justify-between items-center">
                    <nuxt-link :to="`/admin${project.slug}`">
                        <p>{{project.title}}</p>
                    </nuxt-link>
                    <p>{{project.date}}</p>
                    <nuxt-link :to="`/admin${project.slug}`">
                        <img :src="project.images_preview[0]" width="200" alt="" class="my-2"/>
                    </nuxt-link>
                    <div>
                        <button @click.self="handleDelete(project.title, project.id)">Delete</button>
                    </div>
                </div>
                <hr>
            </li>
        </ul>
        <nuxt-link :to="{path:'/admin/create-project?section=events'}" class="w-0">
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
            projects
        }
    },
    async fetch() {
        !this.$store.state.events.length && await this.$store.dispatch('getSectionItems', 'events')
    },
    created() {
        this.projects = this.$store.state.events
    },
    methods: {
        async handleDelete(title: string, id: string) {
            try {
                const isConfirmed = window.confirm(`Are you sure you want to delete ${title}?`)
                if(!isConfirmed) return;
                const projectToDelete = await firebase.firestore().collection('events').doc(id).get()
                projectToDelete.exists && await projectToDelete.ref.delete()
            } catch(error) {
                console.log(error)
            }
        },
    }
})
</script>