
class TMDBMovie {
    constructor(data) {
        this.id = data.id;
        this.title = data.title || "Titre inconnu";
        this.thumbnail = data.poster_path 
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}` 
            : "https://via.placeholder.com/500x750?text=No+Image";
        this.released_in = data.release_date || "Date inconnue";
        this.duration = data.vote_average !== undefined ? `${data.vote_average} / 10` : "Non noté";
        this.trailerUrl = null; 
    }
}

export default TMDBMovie;
