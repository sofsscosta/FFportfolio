import { ActionTree, GetterTree, MutationTree } from "vuex/types/index";
import firebase from "firebase/app";
//@ts-ignore
import Cookies from 'js-cookie'
import "firebase/auth";
import "firebase/firestore";
import { About, Banner, Project, Review, RootState, Sections } from "~/types";
import { getUserFromCookie } from "~/utils/firebaseUtils";

export const state = () => ({
    isLogged: false,
    error: {
        user: ''
    },
    banners: [],
    events: {
        projects: [],
        selectedProject: {
            id: '',
            date: '',
            description: '',
            images: [],
            images_preview: [],
            slug: '',
            subtitle: '',
            title: '',
            tags: [],
        }
    },
    video: {
        projects: [],
        selectedProject: {
            id: '',
            date: '',
            description: '',
            image_preview: [],
            embed: '',
            slug: '',
            subtitle: '',
            title: '',
            tags: [],
        }
    },
    fashion: {
        projects: [],
        selectedProject: {
            id: '',
            date: '',
            description: '',
            images: [],
            images_preview: [],
            slug: '',
            subtitle: '',
            title: '',
            tags: [],
        }
    },
    product: {
        projects: [],
        selectedProject: {
            id: '',
            date: '',
            description: '',
            images: [],
            images_preview: [],
            slug: '',
            subtitle: '',
            title: '',
            tags: [],
        }
    },
    reviews: [],
    about: {
        contacts: {
            email: 'ferranpamiesflack44@gmail.com',
            phone: '644426640',
            city: 'Barcelona',
            instagram: 'fpf_production',
            year: 2021,
        },
        description: '',
        image: ''
    },
    order: []
})

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit, dispatch }, ctx: any) {
        const user = getUserFromCookie(ctx.req)
        this.commit('SET_LOGGED_STATE', !!user)

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
        this.commit('SET_LOGGED_STATE', !!authUser)
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
        this.$router.push('/admin/login')
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

    async getProject({ commit }, {section, slug}: {section: string; slug: string}) {
        try {
            const processedSlug = `/${section}/${slug}`
            const unprocessedProject = await firebase.firestore().collection(section).where('slug', '==', processedSlug).get()
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

export const mutations: MutationTree<RootState> = {
    SET_LOGGED_STATE(state, isLogged: false) {
        state.isLogged = isLogged
    },
    SET_USER_ERROR(state, error: string) {
        state.error.user = error
    },
    SET_SECTIONS(state, banners: any[]) {
        state.banners = banners
    },
    SET_BANNER(state, {section, bannerUrl}: {section: string, bannerUrl: string}) {
        const banner = state.banners.find(banner => banner.section == section)
        if (!banner) return
        banner.bannerUrl = bannerUrl
    },
    SET_PROJECTS(state, {section, items}: { section: Sections; items: Project[] }) {
        state[section].projects = items
    },
    SET_PROJECT(state, { section, project }: { section: Sections; project: Project}) {
        state[section].selectedProject = project
    },
    SET_REVIEWS(state, reviews: Review[]) {
        state.reviews = reviews
    },
    SET_ABOUT(state, about: About) {
        state.about = about
    },
    SET_ORDER(state, { section, order }: { section: Sections; order: string[]}) {
        state.order[section] = order
    }
}

export const getters: GetterTree<RootState, RootState> = {
    getBanner: (state) => (section: string) => {
        return state.banners.find(banner => banner.section == section)
    }
}