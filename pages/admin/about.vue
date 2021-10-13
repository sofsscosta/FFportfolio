<template>
    <section class="font-light text-gray-500 mb-20 flex flex-col w-full items-center">
        <p class="text-5xl mt-10 mb-12 font-thin">Edit ABOUT</p>
        <FormulateForm @submit="updateAbout" :style="{minWidth: '36rem'}" v-model="about">
            <FormulateInput type="group" name="contacts">
                <FormulateInput type="email" label="Email" name="email" placeholder="Email" validation="required|email"/>
                <FormulateInput type="text" label="Phone" name="phone" placeholder="Phone" validation="required"/>
                <FormulateInput type="text" label="City" name="city" placeholder="City" validation="required"/>
                <FormulateInput type="text" label="Instagram" name="instagram" placeholder="Instagram" validation="required"/>
            </FormulateInput>
            <FormulateInput type="textarea" label="Description" name="description" placeholder="Description" validation="required" input-class="h-56"/>
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
            about: {
                contacts: [{
                    email: '',
                    phone: '',
                    city: '',
                    instagram: '',
                    year: 2021,
                }],
                description: ''
            },
            isLoading: false,
        }
    },
    async fetch() {
        await this.$store.dispatch('fetchAbout')
        this.about = { contacts: [this.$store.state.about.contacts], description: this.$store.state.about.description }
        console.log(this.about)
    },
    created() {
        this.about = this.$store.state.about
    },
    methods: {
        async updateAbout(event: any) {
            try {
                this.isLoading = true
                console.log('event',event)
                const processedAbout = { contacts: event.contacts[0], description: event.description }
                await firebase.firestore().collection('about').doc('RCNULCtvbhhssWzzZkTI').update(processedAbout)
                this.isLoading = false
            } catch(error) {
                this.isLoading = false
                console.log(error)
            }
        }
    }
})
</script>