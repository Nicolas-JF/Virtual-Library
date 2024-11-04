const Media = require('./Media');

class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`;
    }

    static longestMovie(movies) {
        return movies.reduce((prev, current) => (prev.duration > current.duration) ? prev : current);
    }
}

module.exports = Movie;
