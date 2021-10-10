<template>
    <body v-if="sections.length" >
        <h4 class="text-center">
            Here is where you update every banner for every page!
        </h4>
        <section v-for="{name, image} in sections" :key="name">
            <label for="banner">Upload banner</label>
            <input type="file" name="banner" id="banner" @change="onFileSelected">
            <button @click="uploadBanner">Upload</button>
            <img width="320" :src="banner || image"/>
            <p v-if="error" class="text-red-300">{{error}}</p>
        </section>
    </body>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const db = firebase.firestore()

export default Vue.extend({
    layout: 'admin',
    data() {
        const sections: {image: string; name: string}[] = []
        return {
            selectedImage: null,
            banner: "",
            uploadValue: 0,
            error: '',
            sections
        }
    },
    async fetch() {
        const sections = await db.collection('banners').get()
        sections.forEach(doc => {
            const image = doc.data()?.url
            if (doc.id && image) this.sections.push({ name: doc.id, image })
        })
    },
    methods: {
        onFileSelected(event: any) {
            this.selectedImage = event.target.files[0]
        },
        uploadBanner() {
            try {
                //@ts-ignore
                let reference = firebase.storage().ref(`/images/${this.selectedImage.name}`);         // 2
                //@ts-ignore
                let task = reference.put(this.selectedImage);               // 3
                task.on('state_changed', async snapshot => {
                }, error => this.error = error.toString(), 
                async () => {
                    const url = await task.snapshot.ref.getDownloadURL()
                    const collection = await db.collection('banners').get()
                    collection.forEach(doc => {
                        doc.id === 'events' && doc.ref.update({url: url})
                        })
                    this.banner = url
                })
            } catch(error) {
                console.log(error)
            }
        }
    }
})
</script>