export default class AnimesModel {
    constructor (
        public attributes: {
            canonicalTitle: string,
            abbreviatedTitles: any,
            synopsis: string;
            posterImage: { large: string },
            subtype: string,
            episodeCount:number,
            ratingRank:number
        }
    ) {}
}
