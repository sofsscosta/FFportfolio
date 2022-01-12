//@ts-ignore
import { ActionTree } from "vuex/types/index";
//@ts-ignore
import firebase from "firebase/app";
//@ts-ignore
import Cookies from 'js-cookie'
import "firebase/auth";
import "firebase/firestore";
import { Banner, Review, RootState } from "~/types";
import { getUserFromCookie } from "~/utils/firebaseUtils";
//@ts-ignore
import { ErrorTypes, toastMessages } from "~/utils/errorMessages.ts";

const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit, dispatch }, ctx: any) {
        try {
            const user = getUserFromCookie(ctx.req)
            commit('SET_LOGGED_STATE', !!user)
    
            const allCollections = await firebase.firestore().collection('banners').get()
            const banners: Banner[] = []
            allCollections.forEach(doc => banners.push({ section: doc.id, bannerUrl: '' }))
            commit('SET_SECTIONS', banners)
    
            await dispatch('fetchReviews')
            await dispatch('fetchAbout')
        } catch (error) {
            dispatch('feedback', ErrorTypes.ERROR)
        }
    },

    async onAuthStateChanged({ commit, dispatch }, { authUser }) {
        if (!authUser) {
          Cookies.remove('access_token')
          return
        }
        if (authUser && authUser.getIdToken) {
          try {
            const idToken = await authUser.getIdToken(true)
            Cookies.set('access_token', idToken)
          } catch (error) {
            dispatch('feedback', ErrorTypes.ERROR)
          }
        }
        commit('SET_LOGGED_STATE', !!authUser)
    },

    feedback({}, message) {
        //@ts-ignore
        if(this.$router.currentRoute.path.includes(process.env.ADMIN_PATH)) {
            //@ts-ignore
            if(message === ErrorTypes.SUBMITTING) this.app.$toast.show(toastMessages.SUBMITTING).goAway(1500)
            //@ts-ignore
            if(message === ErrorTypes.ERROR) this.app.$toast.error(toastMessages.ERROR).goAway(1500)
            //@ts-ignore
            if(message === ErrorTypes.SUCCESS) this.app.$toast.success(toastMessages.SUCCESS).goAway(1500)
        }
    },

    async logIn({ commit, dispatch }, {email, password}: {email: string, password: string}) {
        try {
          dispatch('feedback', ErrorTypes.SUBMITTING)
          const { user } = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
            await dispatch('onAuthStateChanged', {
                authUser: user,
            })
            
            commit('SET_LOGGED_STATE', true)
            dispatch('feedback', ErrorTypes.SUCCESS)
        } catch(error) {
          dispatch('feedback', ErrorTypes.ERROR)
          //@ts-ignore
        //   console.log('getErrorCode',error.getCode())
        }
    },

    async logout({ commit, dispatch }, ctx) {
        try {
            await firebase.auth().signOut()
            Cookies.remove('access_token')
            commit('SET_LOGGED_STATE', false)
            //@ts-ignore
            this.$router.currentRoute.fullPath === `/${process.env.ADMIN_PATH}` ? this.$router.push(`${process.env.ADMIN_PATH}/login`) : this.$router.push(`login`)
            dispatch('feedback', ErrorTypes.SUCCESS)
        } catch(error) {
            dispatch('feedback', ErrorTypes.ERROR)
        }
    },

    async getBanner({ commit, dispatch }, collection: string) {
        try {
            const home = await firebase.firestore().collection('banners').doc(collection).get()
            const image = home.data()?.url
            commit('SET_BANNER', {section: collection, bannerUrl: image})
        } catch(error) {
            dispatch('feedback', ErrorTypes.ERROR)
        }
    },

    async getSectionItems ({ commit, dispatch }, section: string) {
        try {
            const snapshots = await firebase.firestore().collection(section).get()
            const items: any[] = []
            const order: string[] = []
            snapshots.forEach(async doc => {
                items.push({...doc.data(), id: doc.id})
                order.push(doc.id.toString())
            })
            const finalOrder = await firebase.firestore().collection('order').doc(section).get()
            // await firebase.firestore().collection('order').doc(section).set({order})
            // const newOrder = await firebase.firestore().collection('order').doc(section).get()
            commit('SET_ORDER', {section, order: finalOrder.data()})
            commit('SET_PROJECTS', {section, items})
        } catch(error) {
            dispatch('feedback', ErrorTypes.ERROR)
        }
    },

    async getProject({ commit, dispatch }, {section, slug}: {section: string; slug: string}): Promise<void> {
        try {
            const processedSlug = `/${section}/${slug}`
            const unprocessedProject = await firebase.firestore().collection(section).where('slug', '==', processedSlug).get()
            if (!unprocessedProject.docs.length) return
            const id = unprocessedProject.docs[0].id
            const restOfProject = unprocessedProject.docs[0].data()
            const project = {...restOfProject, id}
            commit('SET_PROJECT', {section, project})
        } catch(error) {
            dispatch('feedback', ErrorTypes.ERROR)
        }
    },

    async fetchReviews({ commit, dispatch }) {
        try {
            const unprocessedProject = await firebase.firestore().collection('reviews').get()
            const reviews: Review[] = []
            unprocessedProject.forEach(doc => {
                const { author, link, text } = doc.data()
                reviews.push({ id: doc.id, author, link, text })
            })
            commit('SET_REVIEWS', reviews)
        } catch(error) {
            dispatch('feedback', ErrorTypes.ERROR)
        }
    },

    async fetchAbout({ commit, dispatch }) {
        try {
            const snapshot = await firebase.firestore()
                .collection("about")
                .doc("RCNULCtvbhhssWzzZkTI")
                .get();
            const data = snapshot.data()
            commit('SET_ABOUT', data)
        } catch(error) {
            dispatch('feedback', ErrorTypes.ERROR)
        }
    }
}

export default actions
