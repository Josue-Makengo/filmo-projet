import TMDBMovie from '../models/TMDBMovie.js';

export default class MoviesFactory {
    constructor(data, source) {
        return this.createMovie(data, source); 
    }

    createMovie(data, source) {
        switch (source) {
            case 'tmdbApi':
                return new TMDBMovie(data);
            default:
                throw new Error(`Source inconnue : ${source}`);
        }
    }
}
