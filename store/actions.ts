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

const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit, dispatch }, ctx: any) {
        const user = getUserFromCookie(ctx.req)
        commit('SET_LOGGED_STATE', !!user)

        const allCollections = await firebase.firestore().collection('banners').get()
        const banners: Banner[] = []
        allCollections.forEach(doc => banners.push({ section: doc.id, bannerUrl: '' }))
        commit('SET_SECTIONS', banners)

        await dispatch('fetchReviews')
        await dispatch('fetchAbout')
    },

    async onAuthStateChanged({ commit }, { authUser }) {
        if (!authUser) {
          Cookies.remove('access_token')
          return
        }
        if (authUser && authUser.getIdToken) {
          try {
            const idToken = await authUser.getIdToken(true)
            Cookies.set('access_token', idToken)
          } catch (error) {
            console.error(error)
          }
        }
        commit('SET_LOGGED_STATE', !!authUser)
    },

    async logIn({ commit, dispatch }, {email, password}: {email: string, password: string}) {
        try {
          const { user } = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
    
          await dispatch('onAuthStateChanged', {
            authUser: user,
          })

          commit('SET_LOGGED_STATE', true)
        } catch(error) {
          commit('SET_USER_ERROR', error)
        }
    },

    async logout({ commit }) {
        await firebase.auth().signOut()
        Cookies.remove('access_token')
        commit('SET_LOGGED_STATE', false)
        this.$router.push(`${process.env.ADMIN_PATH}/login`)
    },

    async getBanner({ commit }, collection: string) {
        const home = await firebase.firestore().collection('banners').doc(collection).get()
        const image = home.data()?.url
        commit('SET_BANNER', {section: collection, bannerUrl: image})
    },

    async getSectionItems ({ commit }, section: string) {
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
            console.error(error)
        }
    },

    async getProject({ commit }, {section, slug}: {section: string; slug: string}): Promise<void> {
        try {
            const processedSlug = `/${section}/${slug}`
            const unprocessedProject = await firebase.firestore().collection(section).where('slug', '==', processedSlug).get()
            if (!unprocessedProject.docs.length) return
            const id = unprocessedProject.docs[0].id
            const restOfProject = unprocessedProject.docs[0].data()
            const project = {...restOfProject, id}
            commit('SET_PROJECT', {section, project})
        } catch(error) {
            console.error(error)
        }
    },

    async fetchReviews({ commit }) {
        try {
            const unprocessedProject = await firebase.firestore().collection('reviews').get()
            const reviews: Review[] = []
            unprocessedProject.forEach(doc => {
                const { author, link, text } = doc.data()
                reviews.push({ id: doc.id, author, link, text })
            })
            commit('SET_REVIEWS', reviews)
        } catch(error) {
            console.error(error)
        }
    },

    async fetchAbout({ commit }) {
        try {
            const snapshot = await firebase.firestore()
                .collection("about")
                .doc("RCNULCtvbhhssWzzZkTI")
                .get();
            const data = snapshot.data()
            commit('SET_ABOUT', data)
        } catch(error) {
            console.error(error)
        }
    }
}

export default actions
