class FilmeModel {

    constructor() {
        this._poster = "";
        this._title = "";
        this._released = "";
        this._runtime = "";
        this._genre = "";
        this._director = "";
        this._writer = "";
        this._actors = "";
        this._plot = "";
        this._imdbRating = "";
    }

    criaMovie(nomeFilme, callback) {


        let request = new XMLHttpRequest();
        request.open("GET", `http://www.omdbapi.com/?i=tt3896198&apikey=f4851b3c&t=${nomeFilme}`);
        request.addEventListener('load', () => {
            try {
                if (request.status != 200) throw "Um código inesperado foi retornado!";
                let response = JSON.parse(request.responseText);
                this._poster = response.Poster;
                this._title = response.Title;
                this._released = response.Released;
                this._runtime = response.Runtime;
                this._genre = response.Genre;
                this._director = response.Director;
                this._writer = response.Writer;
                this._actors = response.Actors;
                this._plot = response.Plot;
                this._imdbRating = response.imdbRating;

                callback();
            } catch (erro) {
                console.log(`Erro ${erro}`);
                //MovieView.filmeNaoEncontrado();
            }
        });

        request.send();
    }
}



//http://www.omdbapi.com/?i=tt3896198&apikey=f4851b3c