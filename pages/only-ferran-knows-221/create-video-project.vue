<template>
    <section class="font-light text-gray-500 mb-20 flex flex-col w-full items-center">
        <p class="text-5xl mt-10 mb-12 font-thin">New <span class="font-light"> VIDEO</span> project</p>
        <FormulateForm @submit="createProject" class="max-w-2xl" v-model="project">
            <FormulateInput type="text" label="Title" name="title" placeholder="Title" validation="required"/>
            <FormulateInput type="text" label="Subtitle" name="subtitle" placeholder="Subtitle"/>
            <FormulateInput type="textarea" label="Description" name="description" placeholder="Description" input-class="h-56"/>
            <FormulateInput type="text" label="Date" name="date" help="Please inser the date manually in the format you'd like to see displayed. Ex: Aug 2021 or 08/2021" placeholder="Date"/>
            <FormulateInput type="textarea" label="Embed video info" name="embed" placeholder="Embed" helper="This is the code you get from youtube/vimeo/other so we can display the video :)" input-class="h-32"/>
            <FormulateInput
                type="image"
                name="image_preview"
                label="Preview image"
                help="This image will show on the video section before entering the video detail."
                validation="mime:image/jpeg,image/png,image/gif"
                :uploader="uploadImage"
            />
             <FormulateInput
                type="group"
                name="tags"
                :repeatable="true"
                label="Tags"
                add-label="+ Add tag"
                validation="max:3"
            >
                <FormulateInput
                    name="tag"
                    label="Tag"
                />
            </FormulateInput>
            <FormulateInput 
                type="submit" 
                :label="isLoading ? 'LOADING...' : 'CREATE VIDEO PROJECT'" 
                class="mt-10" 
                :disabled="isLoading"
            />
        </FormulateForm>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import { ErrorTypes } from '~/utils/errorMessages';

export default Vue.extend({
    layout: 'admin',
    data() {
        return {
            project : {
                date: '',
                description: '',
                image_preview: '',
                embed: '',
                slug: '',
                subtitle: '',
                title: '',
                tags: [],
            },
            section: '',
            isLoading: false
        }
    },
    methods: {
        async createProject(event: any) {
            try {
                this.isLoading = true
                const preProcesedProject = {
                    date: event.date,
                    description: event.description,
                    slug: this.generateSlug(event.title),
                    subtitle: event.subtitle,
                    title: event.title,
                    tags: this.processTags(event.tags),
                    image_preview: event.image_preview[0].url
                }
                const newProject = await firebase.firestore().collection('video').add(preProcesedProject)   
                this.isLoading = false
                this.$store.dispatch('feedback', ErrorTypes.SUCCESS)
                this.$router.push(`/only-ferran-knows-221/video/${newProject.id}`)
            } catch(error) {
                this.isLoading = false
                this.$store.dispatch('feedback', ErrorTypes.ERROR)
            }
        },
        async uploadImage(file: any): Promise<any> {
            try {
                const url = await new Promise((resolve, reject) => {
                    //@ts-ignore
                    let reference = firebase.storage().ref(`/images/video/${this.project.title}/${file.name}`);
                    const task = reference.put(file);
                    task.on('state_changed', 
                        null,
                        null,
                        async () => {
                            try {
                                const url = await task.snapshot.ref.getDownloadURL()
                                resolve(url)
                                return url
                            } catch(error) {
                                reject(undefined)
                                console.log(error)
                            }
                    })
                })
                return { url }
            } catch(error) {
                console.log(error)
            }
        },
        processTags(tags: {tag: string}[]) {
            return tags.length && tags.filter(tag => tag.tag).map(el => el.tag)
        },
        generateSlug(title:string) {
            return `/video/${title.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(' ').join('-')}`
        }
    }
})
</script>