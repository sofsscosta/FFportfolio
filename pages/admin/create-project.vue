<template>
    <section class="font-light text-gray-500 mb-20 flex flex-col w-full items-center">
        <p class="text-5xl mt-10 mb-12 font-thin">New <span class="font-light">{{section.toUpperCase()}}</span> project</p>
        <FormulateForm @submit="createProject" class="max-w-2xl" v-model="project">
            <FormulateInput type="text" label="Title" name="title" placeholder="Title" validation="required"/>
            <FormulateInput type="text" label="Subtitle" name="subtitle" placeholder="Subtitle"/>
            <FormulateInput type="textarea" label="Description" name="description" placeholder="Description"/>
            <FormulateInput type="text" label="Date" name="date" help="Please inser the date manually in the format you'd like to see displayed. Ex: Aug 2021 or 08/2021" placeholder="Date"/>
            <FormulateInput
                type="group"
                :repeatable="true"
                name="images_preview"
                label="Preview images"
                help="Introduce them in order of display. These will be the 3 images the user sees before entering the project's details."
                validation="required"
                add-label="+ Add image"
            >
                <FormulateInput
                    type="image"
                    name="image"
                    validation="mime:image/jpeg,image/png,image/gif"
                />
            </FormulateInput>
            <FormulateInput
                type="group"
                :repeatable="true"
                name="images"
                label="Images"
                help="Introduce them in order of display. These will be all the images inside the project's details."
                validation="required"
                add-label="+ Add image"
            >
                <FormulateInput
                    type="image"
                    name="image"
                    validation="mime:image/jpeg,image/png,image/gif"
                />
            </FormulateInput>
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
            <FormulateInput type="submit" label="CREATE PROJECT" class="mt-10"/>
        </FormulateForm>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import { asyncForEach } from '~/utils';

export default Vue.extend({
    layout: 'admin',
    data() {
        return {
            project : {
                date: '',
                description: '',
                images: [],
                images_preview: [],
                slug: '',
                subtitle: '',
                title: '',
                tags: [],
            },
            section: '',
            images: [],
            images_preview: []
        }
    },
    fetch() {
        if(!this.$route.query.section || this.$route.query.section instanceof Array) this.$router.push('/admin/error')        
        //@ts-ignore
        this.section = this.$route.query.section
    },
    methods: {
        async createProject(event: any) {
            const preProcesedProject = {
                date: event.date,
                description: event.description,
                slug: event.slug,
                subtitle: event.subtitle,
                title: event.title,
                tags: this.processTags(event.tags),
            }
            const newProject = await firebase.firestore().collection('events').add(preProcesedProject)
            const images_preview = await this.uploadImages(event.images_preview)
            const images = await this.uploadImages(event.images)
            await firebase.firestore().collection('events').doc(newProject.id).update({...preProcesedProject, images_preview, images})
        },
        async uploadImages(array: any[]) {
            try {
                const processedImages: string[] = []
                await Promise.all(array.map((element: any) => { 
                    return new Promise((resolve, reject): void => {
                        const image = element.image?.files[0]?.file
                        if(!image) return
                        //@ts-ignore
                        let reference = firebase.storage().ref(`/images/events/${this.project.title}/${image.name}`);
                        const task = reference.put(image);
                        task.on('state_changed', 
                            null,
                            null,
                            async () => {
                                const url = await task.snapshot.ref.getDownloadURL()
                                processedImages.push(url)
                                resolve(url)
                        })
                    })
                }))
                return processedImages
            } catch(error) {
                console.log(error)
            }
        },
        processTags(tags: {tag: string}[]) {
            return tags.map(el => el.tag)
        },
    }
})
</script>

<style scoped>
.formulate-file-image-preview-image {
    width: auto;
    height: 2.5rem;
}
</style>