import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

export default ({
    methods: {
        async uploadImages(array: any[]) {
            try {
                const processedImages: string[] = []
                await Promise.all(array.map((element: any) => { 
                    return new Promise((resolve, reject): void => {
                        if (element.image) {
                            const file = element.image?.files[0]
                            console.log('file', file)
                            if(!file) return
                            const image = file?.file
                            const uuid = file?.uuid
                            //@ts-ignore
                            let reference = firebase.storage().ref(`/images/${this.section}/${this.project.title}/${image.name + '+' + uuid}`);
                            const task = reference.put(image);
                            task.on('state_changed', 
                                null,
                                null,
                                async () => {
                                    const url = await task.snapshot.ref.getDownloadURL()
                                    processedImages.push(url)
                                    resolve(url)
                            })
                        }
                        else if (element.url) {
                            processedImages.push(element.url)
                            resolve(element.url)
                        }
                        else resolve(true)
                    })
                }))
                return processedImages
            } catch(error) {
                console.log(error)
            }
        },
        async uploadImage(file: any): Promise<any> {
            try {
                const url = await new Promise((resolve, reject) => {
                    //@ts-ignore
                    let reference = firebase.storage().ref(`/images/video/${this.project.title}/${file.name}`);
                    const task = reference.put(file);
                    task.on('state_changed', 
                        null,
                        null,
                        async () => {
                            try {
                                const url = await task.snapshot.ref.getDownloadURL()
                                resolve(url)
                                return url
                            } catch(error) {
                                reject(undefined)
                                console.log(error)
                            }
                    })
                })
                return { url }
            } catch(error) {
                console.log(error)
            }
        },
        processTags(tags: {tag: string}[]): 0 | string[] {
            return tags.length && tags.filter(tag => tag.tag).map(el => el.tag)
        },
        generateSlug(section: string, title:string): string {
            return `/${section}/${title.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(' ').join('-')}`
        }
    }
})