class Movie {
    constructor(poster,title, released, runtime, genre, director, writer, actors, plot, imdbRating) {
        this._poster = poster;
        this._title = title;
        this._released= released;
        this._runtime = runtime;
        this._genre = genre;
        this._director = director;
        this._writer = writer;
        this._actors = actors;
        this._plot = plot;
        this._imdbRating = imdbRating;
    }

    criaMovie(filme, callback) {
        let request = new XMLHttpRequest();
        request.open("GET", `https://www.omdbapi.com/?i=tt3896198&apikey=982c7993&t=${filme}`);
        request.addEventListener('load', () => {
            try {
                if(request.status != 200) throw "Um código inesperado foi retornado!";
                let response = JSON.parse(request.responseText);
                this._poster = response.poster;
                this._title = response.title;
                this._released = response.released;
                this._runtime = response.runtime;
                this._genre = response.genre;
                this._director = response.director;
                this._writer = response.writer;
                this._actors = response.actors;
                this._plot = response.plot;
                this._imdbRating = response.imdbRating;
                callback();
            } catch(erro) {
                console.log(`Erro ${erro}`);
                MovieView.filmeNaoEncontrado();
            }
        });

        request.send();
    }}