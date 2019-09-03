export default class PersonajesModel {
    constructor (
        public attributes: {
            canonicalName: string,
            description: string,
            image: { original: string }
        }
    ) {}
}
