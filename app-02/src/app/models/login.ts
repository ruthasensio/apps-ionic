  export default class LoginModel {
    constructor (
        public grant_type: string,
        public username: string,
        public password: string 
    ) {}
}