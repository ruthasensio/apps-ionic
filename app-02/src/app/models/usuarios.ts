export default class UsuariosModel {
    constructor (
        public attributes: {
            canonicalTitle: string,
            synopsis: string;
            posterImage: { large: string }
        }
    ) {}
}