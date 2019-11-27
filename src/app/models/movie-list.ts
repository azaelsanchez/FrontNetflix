export class Movie{
    constructor(
        public popularity: Number,
        public vote_count: Number,
        public video: Boolean,
        public poster_path: String,
        public id: String,
        public adult: Boolean,
        public backdrop_path: String,
        public original_language: String,
        public original_title:String,
        public genre_ids: Number,
        public title: String,
        public vote_average: Number,
        public overview: String,
        public release_date: Number
    ){}
}