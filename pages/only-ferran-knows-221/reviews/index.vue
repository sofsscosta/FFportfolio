<template>
    <div class="font-light text-gray-500">
        <h2 class="text-3xl mt-14 mb-3 font-thin">REVIEWS</h2>
        <h2 class="font-light mb-10">
            Here you can create, edit or delete reviews. Click on each item to see its details.
        </h2>
        <client-only>
        <ul class="grid mb-20 w-full px-10" :key="$store.state.reviews && $store.state.reviews.length" v-if="$store.state.reviews.length">
            <div class="grid grid-class text-lg">
                <p>Author</p>
                <p>Text</p>
                <p>See related project</p>
                <p>Actions</p>
            </div>
            <hr>
            <li v-for="(review, index) in reviews" :key="index">
                <client-only>
                    <div class="grid grid-class items-center py-5" v-if="review">
                        <nuxt-link v-if="review && review.id" :to="`/only-ferran-knows-221/reviews/edit/${review.id}`">
                            <p>{{review.author}}</p>
                        </nuxt-link>
                        <p v-if="review.text">{{truncate(review.text, 30)}}</p>
                        <nuxt-link v-if="review.link" :to="`/only-ferran-knows-221${review.project && review.project.slug}`" :key="!!review.project + ' ' + index" class="flex items-center">
                            <p class="bg-gray-200 rounded-full px-3 py-2 w-min min-w-max">{{ review.project && review.project.title }}</p>
                        </nuxt-link>
                        <div v-else/>
                        <div>
                            <button @click.self="handleDelete(review.title, review.id || 0)">Delete</button>
                        </div>
                    </div>
                <hr>
                </client-only>
            </li>
        </ul>
        </client-only>
        <nuxt-link :to="`/only-ferran-knows-221/reviews/create`" name="Add">
            <p class="bg-gray-400 rounded-full px-3 py-2 text-white w-min min-w-max mb-8">Add review</p>
        </nuxt-link>
        <label for="Add">NOTE: this review will have no project associated. To create a review for a project please got to the section that project belongs to.</label>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from "firebase/app";
import {truncate} from '~/utils'
import { ErrorTypes } from '~/utils/errorMessages';

export default Vue.extend({
    layout: 'admin',
    data() {
        const reviews: any[] = []
        return {
            reviews,
        }
    },
    async fetch() {
        await this.$store.dispatch('fetchReviews')
        this.reviews = this.$store.state.reviews
        this.addReviewProject()
    },
    async created() {
        this.reviews = this.$store.state.reviews
        this.addReviewProject()
    },
    methods: {
        async handleDelete(author: string, id: string) {
            try {
                const isConfirmed = window.confirm(`Are you sure you want to delete review by ${author}?`)
                if(!isConfirmed) return;
                await firebase.firestore().collection('reviews').doc(id).delete()
                await this.$store.dispatch('fetchReviews')
                this.reviews = this.$store.state.reviews
                this.addReviewProject()
                this.$store.dispatch('feedback', ErrorTypes.SUCCESS)
            } catch(error) {
                this.$store.dispatch('feedback', ErrorTypes.ERROR)
            }
        },
        truncate,
        async addReviewProject() {
            try {
                this.reviews = await Promise.all(this.$store.state.reviews.map(async (review: any) => {
                    if (!review.link) return review
                    const collection = review.link.split('/')[1]
    
                    const unprocessedProject = await firebase.firestore().collection(collection).where('slug', '==', review.link).get()
                    const project = unprocessedProject.docs[0].data()
                    if(!project) return review
                    if(!unprocessedProject.docs[0].id) return review
                    const projectInfo = { slug: `/${collection}/${unprocessedProject.docs[0].id}`, title: project.title }
                    review.project = projectInfo
                    return review
                }))
            } catch(error) {
                this.$store.dispatch('feedback', ErrorTypes.ERROR)
            }
        }
    }
})
</script>
<style scoped>
.grid-class {
    grid-template-columns: 0.5fr 1fr 1fr 0.3fr;
    column-gap: 2rem;
}
</style>