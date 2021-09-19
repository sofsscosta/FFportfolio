<template>
    <section>
        <label for="banner">Upload banner</label>
        <input type="file" name="banner" id="banner" @change="onFileSelected">
        <button @click="uploadBanner">Upload</button>
        <img width="320" :src="banner"/>
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
            selectedImage: null,
            banner: ""
        }
    },
    methods: {
        onFileSelected(event: any) {
            console.log(event.target.files[0])
            this.selectedImage = event.target.files[0]
        },
        uploadBanner() {
            try {
                console.log('entered')
                //@ts-ignore
                let reference = firebase.storage().ref(`/images/${this.selectedImage.name}`);         // 2
                //@ts-ignore
                let task = reference.put(this.selectedImage);               // 3
                task.on('state_changed', async () => {
                    const url = await task.snapshot.ref.getDownloadURL()
                    this.banner = url
                })
            } catch(error) {
                console.log(error)
            }
        }
    }
})
</script>