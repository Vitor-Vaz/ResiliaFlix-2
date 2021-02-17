class FilmeView {


    static colocaElementos(elemento){
        document.getElementById('title-page').textContent = `${elemento._title} - ResiliaFlix`;
        document.getElementById('title').textContent = elemento._title;
        document.getElementById('runtime').innerHTML = `<b>Runtime:</b> ${elemento._runtime} | <b>Released:</b> ${elemento._released}| <b>Genre:</b> ${elemento._genre}`
        document.getElementById('rating').innerHTML = `<b>Rating:</b> ${elemento._imdbRating} <i class="fas fa-star"></i>`;
        document.getElementById('poster').src = elemento._poster;
        document.getElementById('plot').innerHTML = `<b>Plot: </b>${elemento._plot}`      
        document.getElementById('actors').innerHTML =`<b>Actors: </b> ${elemento._actors}`
        document.getElementById('writer').innerHTML =`<b>Writer: </b> ${elemento._writer}`
        document.getElementById('director').innerHTML =`<b>Director:</b> ${elemento._director}`
    }


}