<template>
    <section class="font-light text-gray-500 mb-20 flex flex-col w-full items-center">
        <p class="text-5xl mt-10 mb-12 font-thin">
            New review
            <span v-if="title"> 
                for 
                <span class="font-light">{{title.toUpperCase()}}</span> 
                project
            </span>
        </p>
        <FormulateForm @submit="addReview" class="max-w-2xl" v-model="review">
            <FormulateInput type="text" label="Author" name="author" placeholder="Name of reviewer" validation="required"/>
            <FormulateInput type="textarea" label="Text" name="text" placeholder="Text - what did they say?" validation="required"/>
            <div v-if="review.slug" class=" mb-8"> Path to project this review relates to: <span class="font-bold">{{ review.slug }}</span></div>
            <nuxt-link v-if="review.slug" :to="`/only-ferran-knows-221/${collection}/${originalProjectId}`" class="mt-10 bg-gray-200 rounded-full px-3 py-2"> See related project </nuxt-link>
            <div v-if="!review.link">This review is not associated with any project.</div>
            <FormulateInput 
                type="submit" 
                :label="isLoading ? 'LOADING...' : 'ADD REVIEW'" 
                class="mt-10" 
                :disabled="isLoading"
            />
        </FormulateForm>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";

export default Vue.extend({
    layout: 'admin',
    data() {
        return {
            title: '',
            review: {
                link: '',
                author: '',
                text: ''
            },
            originalProjectId: '',
            isLoading: false,
            collection: ''
        }
    },
    async created() {
        // Path format: /only-ferran-knows-221/reviews/edit/:collection/:projectId
        
        // this.collection = this.$route.params.slug
        const slug = this.$route.path.split('/only-ferran-knows-221/reviews/create')[1]
        if (!slug) return
        this.review.link = slug

        const collection = slug?.split('/')[1]
        this.collection = collection

        const unprocessedProject = await firebase.firestore().collection(collection).where('slug', '==', slug).get()
        const project = unprocessedProject.docs[0].data()
        this.title = project.title
        this.originalProjectId = unprocessedProject.docs[0].id
    },
    methods: {
        async addReview(event: any) {
            try {
                this.isLoading = true
                const addedReview = await firebase.firestore().collection('reviews').add(event)
                await this.$store.dispatch('fetchReviews')
                this.isLoading = false
                this.$router.push(`/only-ferran-knows-221/reviews/edit/${addedReview.id}`)
            } catch(error) {
                this.isLoading = false
                console.log(error)
            }
        },
    }
})
</script>