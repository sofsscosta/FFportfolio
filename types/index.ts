export interface RootState {
    isLogged: false,
    error: { user : string}
    banners: Banner[],
    events: Section,
    video: Section,
    fashion: Section,
    product: Section,
}

export interface Section {
    projects: Project[];
    selectedProject: Project
}

export interface Banner {
    id?: string;
    bannerUrl: string;
    section: string;
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