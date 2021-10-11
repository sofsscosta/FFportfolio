<template>
    <section class="font-light text-gray-500 mb-20">
        <p class="text-5xl my-10 font-thin">New <span class="font-light">{{section.toUpperCase()}}</span> project</p>
        <FormulateForm @submit="createProject" class="max-w-2xl">
            <FormulateInput type="text" label="Title" name="title" v-model="project.title" placeholder="Title" validation="required"/>
            <FormulateInput type="text" label="Subtitle" name="subtitle" v-model="project.subtitle" placeholder="Subtitle"/>
            <FormulateInput type="textarea" label="Description" name="description" v-model="project.description" placeholder="Description"/>
            <FormulateInput type="text" label="Date" name="date" v-model="project.date" helper="Please inser the date manually in the format you'd like to see displayed. Ex: Aug 2021, 08/2021" placeholder="Date"/>
            <FormulateInput
                type="image"
                name="headshot"
                label="Select an image to upload"
                help="Select a png, jpg or gif to upload."
                validation="mime:image/jpeg,image/png,image/gif"
            />
        </FormulateForm>
        <!-- <input type="text" placeholder="Title"> -->
        <!-- <label for="banner" class="flex flex-row mb-2">Image<p class="font-bold ml-1 text-black">{{ name.toUpperCase() }}</p></label>
        <input type="file" name="banner" id="banner" @change="onFileSelected(name)" :value="currentImage.name" class="mt-2">
        <img width="480" :src="currentImage" class="mt-2" :key="currentImage"/>
        <p v-if="error" class="text-red-300">{{error}}</p> -->
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
            },
            section: ''
        }
    },
    fetch() {
        if(!this.$route.query.section || this.$route.query.section instanceof Array) this.$router.push('/admin/error')        
        //@ts-ignore
        this.section = this.$route.query.section
    },
    methods: {
        createProject() {

        },
        //@ts-ignore
        currentSection(name: string) {
            //@ts-ignore
            return this.sections.find((el: any) => el.name == name)
        },
        onFileSelected(section: string){
            // @ts-ignore
            this.currentSection(section).selectedImage = window.event.target.files[0]
            this.uploadBanner(section)
        },
        uploadBanner(section: string) {
            try {
                const currentSection = this.currentSection(section)
                //@ts-ignore
                let reference = firebase.storage().ref(`/images/${currentSection.selectedImage.name}`);
                //@ts-ignore
                let task = reference.put(currentSection.selectedImage);
                task.on('state_changed', 
                    () => {}, 
                    error => currentSection.error = error.toString(), 
                    async () => {
                        const url = await task.snapshot.ref.getDownloadURL()
                        // const collection = await db.collection('banners').get()
                        // collection.forEach(doc => {
                        //     doc.id === section && doc.ref.update({url: url})
                        //     })
                        // currentSection.currentImage = url
                })
            } catch(error) {
                console.log(error)
            }
        }
    }
})
</script>