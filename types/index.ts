export interface RootState {
    isLogged: false,
    banners: Banner[]
}

export interface Banner {
    bannerUrl: string,
    section: string
}