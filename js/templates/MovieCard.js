
// class MovieCard {
//     constructor(movie) {
//         this.movie = movie;
//     }

//     createMovieCard() {
//         const container = document.createElement('div');
//         container.classList.add('movie-card');
//         container.style.margin = "10px";

//         container.innerHTML = `
//             <div class="movie-thumbnail">
//                 <img src="${this.movie.thumbnail}" alt="${this.movie.title}">
//             </div>
//             <h3>${this.movie.title}</h3>
//             <p>Sortie : ${this.movie.released_in}</p>
//             <p>Note : ${this.movie.duration}</p>
//             ${this.movie.trailerUrl 
//                 ? `<a href="${this.movie.trailerUrl}" target="_blank" class="trailer-btn">🎬 Voir la bande-annonce</a>`
//                 : `<span class="no-trailer">Pas de bande-annonce</span>`}
//         `;
//         return container;
//     }
// }

// window.MovieCard = MovieCard;


class MovieCard {
    constructor(movie) {
        this.movie = movie;
    }

    createMovieCard() {
        const container = document.createElement('div');
        container.classList.add('movie-card');
        container.style.margin = "10px";

        container.innerHTML = `
            <div class="movie-thumbnail">
                <img src="${this.movie.thumbnail}" alt="${this.movie.title}">
            </div>
            <h3>${this.movie.title}</h3>
            <p>Sortie : ${this.movie.released_in}</p>
            <p>Note : ${this.movie.duration}</p>
            ${this.movie.trailerUrl 
                ? `<button class="trailer-btn" data-url="${this.movie.trailerUrl}">🎬 Voir la bande-annonce</button>`
                : `<span class="no-trailer">Pas de bande-annonce</span>`}
        `;

        // Ajout du gestionnaire d'événement pour le bouton trailer
        if (this.movie.trailerUrl) {
            const btn = container.querySelector('.trailer-btn');
            btn.addEventListener('click', () => {
                const iframe = document.getElementById('trailer-iframe');
                const modal = document.getElementById('trailer-modal');
                iframe.src = btn.dataset.url.replace("watch?v=", "embed/"); 
                modal.style.display = "block";
            });
        }

        return container;
    }
}

window.MovieCard = MovieCard;
