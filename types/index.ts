export interface RootState {
    isLogged: false,
    banners: Banner[],
    events: Project[],
    video: Project[],
    fashion: Project[],
    product: Project[],
}

export interface Banner {
    id?: string;
    bannerUrl: string,
    section: string
}

export interface Project {
    id: string;
    date: string;
    description?: string;
    images: string[];
    images_preview: string[];
    slug: string;
    subtitle: string;
    title: string;
    tags: string[];
}

export interface About {
    email: string,
    phone: string,
    city: string,
    instagram: string,
    year: number,
}

export type Sections = 'events' | 'fashion' | 'product' | 'video'