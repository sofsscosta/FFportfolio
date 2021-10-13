<template>
    <section class="font-light text-gray-500 mb-20 flex flex-col w-full items-center">
        <p class="text-5xl mt-10 mb-12 font-thin">Edit <span class="font-light">{{project.title.toUpperCase()}}</span> project</p>
        <FormulateForm @submit="updateProject" class="max-w-2xl" v-model="project">
            <FormulateInput type="text" label="Title" name="title" placeholder="Title" validation="required"/>
            <FormulateInput type="text" label="Subtitle" name="subtitle" placeholder="Subtitle"/>
            <FormulateInput type="textarea" label="Description" name="description" placeholder="Description" input-class="h-56"/>
            <FormulateInput type="text" label="Date" name="date" help="Please inser the date manually in the format you'd like to see displayed. Ex: Aug 2021 or 08/2021" placeholder="Date"/>
            <FormulateInput
                type="group"
                :repeatable="true"
                name="images"
                label="Images"
                help="Introduce them in order of display. These will be all the images inside the project's details."
                validation="required"
                add-label="+ Add image"
            >
                <template #default="{model, index}">
                    <client-only>
                        <FormulateInput
                            type="image"
                            name="image"
                            validation="mime:image/jpeg,image/png,image/gif"
                        />
                        <div v-if="model[index] && model[index].url">
                            <p>Previous image</p>
                            <img :src="model[index].url" alt="" class="h-28">
                        </div>
                    </client-only>
                </template>
            </FormulateInput>
            <FormulateInput
                type="group"
                :repeatable="true"
                name="images_preview"
                label="Preview images"
                help="Introduce them in order of display. These will be the 3 images the user sees before entering the project's details."
                validation="required"
                add-label="+ Add image"
            >
                <template #default="{model, index}">
                    <client-only>
                        <FormulateInput
                            type="image"
                            name="image"
                            validation="mime:image/jpeg,image/png,image/gif"
                        />
                        <div v-if="model[index] && model[index].url">
                            <p>Previous image</p>
                            <img :src="model[index].url" alt="" class="h-28">
                        </div>
                    </client-only>
                </template>
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
            <FormulateInput 
                type="submit" 
                :label="isLoading ? 'LOADING...' : 'UPDATE PROJECT'" 
                class="mt-10" 
            />
        </FormulateForm>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

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
                id: ''
            },
            isLoading: false,
            section: ''
        }
    },
    async created() {
        const section = this.$route.path.split('/admin/')[1]?.split('/')[0]
        if (!section) this.$router.push('/admin/error')
        this.section = section

        const projectId = this.$route.params.slug
        const project = await firebase.firestore().collection(this.section).doc(projectId).get()//.where(firebase.firestore.FieldPath.documentId(), '==', projectId)
        if (!project) this.$router.push('/admin/error')

        const id = project.id
        const projectDoc = project.data()
        if (!projectDoc) return
        const images = projectDoc.images?.map((el: any) => { return {url: el} })
        const images_preview = projectDoc.images_preview?.map((el: any) => { return {url: el} })
        const tags = projectDoc.tags.map((el: any) => { return {tag: el} })
        //@ts-ignore
        this.project = { ...projectDoc, images, images_preview, tags, id }
    },
    methods: {
        async updateProject(event: any) {
            try {
                this.isLoading = true
                // Deveria so passar os campos que fram atualizados pero bueno!
                const preProcessedProject = {
                    date: event.date,
                    description: event.description,
                    subtitle: event.subtitle,
                    title: event.title,
                    tags: this.processTags(event.tags),
                    slug: this.project.slug
                }
                const images_preview = await this.uploadImages(event.images_preview)
                const images = await this.uploadImages(event.images)
                await firebase.firestore().collection(this.section).doc(this.project.id).update({...preProcessedProject, images_preview, images})
                this.isLoading = false
            } catch(error) {
                this.isLoading = false
                console.log(error)
            }
        },
        async uploadImages(array: any[]) {
            try {
                const processedImages: string[] = []
                await Promise.all(array.map((element: any) => { 
                    return new Promise((resolve, reject): void => {
                        if (element.image) {
                            const image = element.image?.files[0]?.file
                            if(!image) return
                            //@ts-ignore
                            let reference = firebase.storage().ref(`/images/${this.section}/${this.project.title}/${image.name}`);
                            const task = reference.put(image);
                            task.on('state_changed', 
                                null,
                                null,
                                async () => {
                                    const url = await task.snapshot.ref.getDownloadURL()
                                    processedImages.push(url)
                                    resolve(url)
                            })
                        }
                        else if (element.url) {
                            processedImages.push(element.url)
                            resolve(element.url)
                        }
                        else resolve(true)
                    })
                }))
                return processedImages
            } catch(error) {
                console.log(error)
            }
        },
        processTags(tags: {tag: string}[]) {
            return tags.filter(tag => tag.tag).map(el => el.tag)
        },
        generateSlug(title:string) {
            return `/${this.section}/${title.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(' ').join('-')}`
        }
    }
})
</script>