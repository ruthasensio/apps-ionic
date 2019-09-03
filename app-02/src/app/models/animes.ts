export default class AnimesModel {
    constructor (
        public attributes: {
            canonicalTitle: string,
            synopsis: string;
            posterImage: { large: string }
        }
    ) {}
}
