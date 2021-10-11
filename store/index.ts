import { ActionTree, GetterTree, MutationTree } from "vuex/types/index";
// import { RootState } from '~/types'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Banner, Project, Sections } from "~/types";

interface RootState {
    isLogged: false,
    error: {
        user: string | undefined
    },
    banners: Banner[],
    events: Project[],
    video: Project[],
    fashion: Project[],
    product: Project[],
}

// const db = firebase.firestore()

export const state = () => ({
    isLogged: false,
    error: {
        user: ''
    },
    banners: [],
    events: [],
    video: [],
    fashion: [],
    product: [],
})

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit }) {
        const isUserLogged = await firebase.auth().currentUser
        this.commit('SET_LOGGED_STATE', !!isUserLogged)
        const allCollections = await firebase.firestore().collection('banners').get()
        const banners: Banner[] = []
        allCollections.forEach(doc => banners.push({ section: doc.id, bannerUrl: '' }))
        commit('SET_SECTIONS', banners)
    },
    async logIn({ commit }, {email, password}: {email: string, password: string}) {
        try {
            await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
          const token = await firebase.auth().currentUser?.getIdToken()
          if (process.client && token) localStorage.setItem('authToken', token)
          commit('SET_LOGGED_STATE', true)
        } catch(error) {
            commit('SET_USER_ERROR', error)
        }
    },
    async logout({ commit }) {
        await firebase.auth().signOut
        localStorage.removeItem('authToken')
        this.$router.push('/admin/login')
        commit('SET_LOGGED_STATE', false)
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
            snapshots.forEach(doc => items.push(doc.data()))
            commit('SET_PROJECTS', {section, items})
        } catch(error) {
            console.log(error)
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
        state[section] = items
    }
}

export const getters: GetterTree<RootState, RootState> = {
    getBanner: (state) => (section: string) => {
        return state.banners.find(banner => banner.section == section)
    }
}