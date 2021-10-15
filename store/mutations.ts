import { MutationTree } from "vuex/types/index";
import { About, Banner, Project, Review, RootState, Sections } from "~/types";

const mutations: MutationTree<RootState> = {
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

export default mutations