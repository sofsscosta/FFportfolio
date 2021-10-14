<template>
    <section class="font-light text-gray-500 mb-20 flex flex-col w-full items-center">
        <p class="text-5xl mt-10 mb-12 font-thin">Update review <span v-if="title"><span class="font-light">{{title.toUpperCase()}}</span> project</span></p>
        <FormulateForm @submit="editReview" class="max-w-2xl" v-model="review">
            <FormulateInput type="text" label="Author" name="author" placeholder="Name of reviewer" validation="required"/>
            <FormulateInput type="textarea" label="Text" name="text" placeholder="Text - what did they say?" validation="required"/>
            <div v-if="review.link" class=" mb-8"> Path to project this review relates to: <span class="font-bold">{{ review.link }}</span></div>
            <nuxt-link v-if="review.link" :to="`/admin/${collection}/${originalProjectId}`" class="mt-10 bg-gray-200 rounded-full px-3 py-2"> See related project </nuxt-link>
            <div v-if="!review.link">This review is not associated with any project.</div>
            <FormulateInput 
                type="submit" 
                :label="isLoading ? 'LOADING...' : 'UPDATE REVIEW'" 
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
                text: '',
                id: ''
            },
            originalProjectId: '',
            isLoading: false,
            collection: ''
        }
    },
    async created() {
        // Path format: /admin/reviews/edit/:reviewId
        const id = this.$route.path.split('/admin/reviews/edit/')[1]
        if (!id) this.$router.push('/admin/error')
        this.review.id = id

        const unprocessedReview = await firebase.firestore().collection('reviews').doc(id).get()
        const review = unprocessedReview.data()
        if (!review) this.$router.push('/admin/error')
        //@ts-ignore
        this.review = {...review, id: this.review.id}

        if (!this.review.link) return

        const collection = this.review.link.split('/')[1]

        const unprocessedProject = await firebase.firestore().collection(collection).where('slug', '==', this.review.link).get()
        const project = unprocessedProject.docs[0].data()
        this.title = project.title

        this.originalProjectId = unprocessedProject.docs[0].id
    },
    methods: {
        async editReview(event: any) {
            try {
                this.isLoading = true
                await firebase.firestore().collection('reviews').doc(this.review.id).update(event)
                await this.$store.dispatch('fetchReviews')
                this.isLoading = false
            } catch(error) {
                this.isLoading = false
                console.log(error)
            }
        },
    }
})
</script>