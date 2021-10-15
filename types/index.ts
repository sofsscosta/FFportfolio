export interface RootState {
    isLogged: false,
    error: { user : string}
    banners: Banner[],
    events: Section,
    video: Section,
    fashion: Section,
    product: Section,
    reviews: Review[],
    about: About,
    order: Order
}

export interface Order {
    events: string[];
    fashion: string[];
    product: string[];
    video: string[];
}

// create an interface for section base that extends to video section or normal section
export interface Section {
    projects: Project[];
    selectedProject: Project | VideoProject
}

export interface Banner {
    id?: string;
    bannerUrl: string;
    section: string;
}

// create an interface for project base that extends to video project or normal project

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

export interface VideoProject {
    id: string;
    date: string;
    description?: string;
    image_preview: string;
    embed: string;
    slug: string;
    subtitle: string;
    title: string;
    tags: string[];
}

export type Sections = 'events' | 'fashion' | 'product' | 'video'

export interface Review {
    id: string;
    author: string;
    text: string;
    link: string;
}

export interface About {
    contacts: {
        email: string,
        phone: string,
        city: string,
        instagram: string,
        year: number,
    };
    image: string;
    description: string
}