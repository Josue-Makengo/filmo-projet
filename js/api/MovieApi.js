
class MovieApi extends Api {
    constructor() {
        super(`${window.CONFIG.BASE_URL}?api_key=${window.CONFIG.TMDB_API_KEY}&language=fr-FR`);
    }

    async getMovies() {
        return await this.get();
    }

    async getTrailer(movieId) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${window.CONFIG.TMDB_API_KEY}&language=fr-FR`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
            return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
        } catch (error) {
            console.error("Erreur trailer :", error);
            return null;
        }
    }
}

window.MovieApi = MovieApi;

