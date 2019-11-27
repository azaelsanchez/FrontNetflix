export class User{
    constructor(
        public _id: string,
        public name: string,
        public email: string,
        public password: string,
        public rentMovie: string,
        public rentDate: string,
        public rentdelivery: string,
        public filmId: string
    ){}
}