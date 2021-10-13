<template>
    <section class="font-light text-gray-500 mb-20 flex flex-col w-full items-center">
        <!-- <p class="text-5xl mt-10 mb-12 font-thin">Edit <span class="font-light">{{project.name.toUpperCase()}}</span> project</p> -->
        <FormulateForm @submit="updateProject" class="max-w-2xl" v-model="project">
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
            <div v-if="project.image_preview && project.image_preview.url">
                <p>Previous preview image</p>
                <img :src="project.image_preview.url" alt="" class="h-28 mb-8">
            </div>
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
                image_preview: '',
                embed: '',
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
        console.log('projectDoc', projectDoc)
        if (!projectDoc) return
        const image_preview = { url: projectDoc.image_preview }
        const tags = projectDoc.tags.map((el: any) => { return {tag: el} })
        //@ts-ignore
        this.project = { ...projectDoc, tags, image_preview, id }
        console.log('project', this.project)
    },
    methods: {
        async updateProject(event: any) {
            try {
                this.isLoading = true
                console.log(event.image_preview)
                const preProcessedProject = {
                    date: event.date,
                    description: event.description,
                    slug: this.project.slug,
                    subtitle: event.subtitle,
                    title: event.title,
                    tags: event.tags.length && this.processTags(event.tags),
                    embed: event.embed,
                    image_preview: event.image_preview.url || event.image_preview[0]?.url
                }
                await firebase.firestore().collection(this.section).doc(this.project.id).update(preProcessedProject)
                this.isLoading = false
            } catch(error) {
                this.isLoading = false
                console.log(error)
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
            return tags.filter(tag => tag.tag).map(el => el.tag)
        },
        generateSlug(title:string) {
            return `/${this.section}/${title.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(' ').join('-')}`
        }
    }
})
</script>