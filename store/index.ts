import { ActionTree, MutationTree } from "vuex/types/index";
// import { RootState } from '~/types'
import firebase from "firebase/app";
import "firebase/auth";

interface RootState {
    isLogged: false,
    error: {
        user: string | undefined
    }
}

export const state = () => ({})

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({}) {
        const isUserLogged = await firebase.auth().currentUser
        if(isUserLogged) this.commit('SET_LOGGED_STATE', true)
    },
    async logIn({}, {email, password}: {email: string, password: string}) {
        try {
            await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
          const token = await firebase.auth().currentUser?.getIdToken()
          if (process.client && token) localStorage.setItem('authToken', token)
          this.commit('SET_LOGGED_STATE', true)
        } catch(error) {
            this.commit('SET_USER_ERROR', error)
        }
    },
    async logout() {
        await firebase.auth().signOut
        localStorage.removeItem('authToken')
        this.$router.push('/admin/login')
        this.commit('SET_LOGGED_STATE', false)
    },
}

export const mutations: MutationTree<RootState> = {
    SET_LOGGED_STATE(state, isLogged: false) {
        state.isLogged = isLogged
    },
    SET_USER_ERROR(state, error: string) {
        state.error.user = error
    }
}