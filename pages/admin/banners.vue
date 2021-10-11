<template>
    <div class="font-light text-gray-500">
        <h2 class="text-4xl my-14 font-thin">
            Hello Ferran! 📸
        </h2>
        <h2 class="text-3xl my-14 font-thin">
            Here is where you update the banners from each page:
        </h2>
        <section v-for="{name, currentImage, error} in sections" :key="name" class="mb-20">
            <label for="banner" class="flex flex-row mb-2">Banner for <p class="font-bold ml-1 text-black">{{ name.toUpperCase() }}</p></label>
            <img width="480" :src="currentImage" class="mt-2" :key="currentImage"/>
            <input type="file" name="banner" id="banner" @change="onFileSelected(name)" :value="currentImage.name" class="mt-2">
            <p v-if="error" class="text-red-300">{{error}}</p>
            <div></div>
        </section>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const db = firebase.firestore()

type section = {
    currentImage: string; 
    name: string;
    selectedImage: null,
    uploadValue: number,
    error: string,
}

export default Vue.extend({
    layout: 'admin',
    data() {
        const sections: section[] = []
        return {
            sections
        }
    },
    async fetch() {
        const sections = await db.collection('banners').get()
        sections.forEach(doc => {
            const currentImage = doc.data()?.url
            if (doc.id) this.sections.push({ name: doc.id, currentImage, selectedImage: null, uploadValue: 0, error: '' })
        })
    },
    methods: {
        currentSection(name: string): section {
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
                        const collection = await db.collection('banners').get()
                        collection.forEach(doc => {
                            doc.id === section && doc.ref.update({url: url})
                            })
                        currentSection.currentImage = url
                })
            } catch(error) {
                console.log(error)
            }
        }
    }
})
</script>