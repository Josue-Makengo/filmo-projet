class MoviesFactory {
    constructor(data, type) {
        // Si le type correspond à l'ancienne API, alors retourne moi l'ancien formatge 
        if (type === 'oldApi') {
            return new Oldmovie(data)
        // Sinon retourne moi le nouveau formatage
        } else if (type === 'newApi') {
            return new Movie(data)
        } else if (type === 'externalApi') {
            return new ExternalMovie(data)
        } else {
            throw 'Unknown type format'
        }
    }
}