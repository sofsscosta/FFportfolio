import { ActionTree, GetterTree, MutationTree } from "vuex/types/index";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Banner, Project, RootState, Sections, VideoProject } from "~/types";

export const state = () => ({
    isLogged: false,
    error: {
        user: ''
    },
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
            snapshots.forEach(doc => items.push({...doc.data(), id: doc.id}))
            commit('SET_PROJECTS', {section, items})
        } catch(error) {
            console.log(error)
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
        state[section].projects = items
    },
    SET_PROJECT(state, { section, project }: { section: Sections; project: Project}) {
        state[section].selectedProject = project
    }
}

export const getters: GetterTree<RootState, RootState> = {
    getBanner: (state) => (section: string) => {
        return state.banners.find(banner => banner.section == section)
    }
}