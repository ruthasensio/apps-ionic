export default class MangaModel {
    constructor (
        public id: number,
        public type: string,
        public attributes: {
            createdAt: string,
            updatedAt: string,
            slug: string,
            posterImage: {
                tiny: string
            }
        }
    ) {       
   
    }

}