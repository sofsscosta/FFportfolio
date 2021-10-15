//@ts-ignore
import { GetterTree } from "vuex/types/index";
import { RootState } from "~/types";

const getters: GetterTree<RootState, RootState> = {
    getBanner: (state) => (section: string) => {
        return state.banners.find(banner => banner.section == section)
    }
}

export default getters