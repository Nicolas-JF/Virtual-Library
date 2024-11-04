const Media = require('./Media');

class Music extends Media {
    constructor(title, year, genre, artist, album, length) {
        super(title, year, genre);
        this.artist = artist;
        this.album = album;
        this.length = length;
    }

    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }

    static shortestAlbum(musics) {
        return musics.reduce((prev, current) => (prev.length < current.length) ? prev : current);
    }
}

module.exports = Music;
