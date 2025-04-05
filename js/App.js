
import MoviesFactory from '../js/factories/MoviesFactory.js';

class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper');
        this.moviesApi = new MovieApi();
    }

    async main() {
        try {
            const moviesData = await this.moviesApi.getMovies();
            console.log("Données reçues :", moviesData);

            if (!moviesData || !Array.isArray(moviesData.results)) {
                console.error("Les données des films sont invalides ou absentes !");
                return; 
            }

            const movieInstances = await Promise.all(
                moviesData.results.map(async movieData => {
                    const movie = new MoviesFactory(movieData, 'tmdbApi');
                    movie.trailerUrl = await this.moviesApi.getTrailer(movie.id);
                    return movie;
                })
            );

            movieInstances.forEach(movie => {
                const movieCardTemplate = new window.MovieCard(movie);
                this.$moviesWrapper.appendChild(movieCardTemplate.createMovieCard());
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
        }
    }
}


const app = new App();
app.main();
