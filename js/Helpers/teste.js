document.getElementById("procuraFilme").addEventListener("click", (event) => {
  let filme = document.getElementById('pesquisaFilme').value;
    window.location.href="movies.html"
    FilmeController.carregaFilme(filme);
    console.log(filme);
} ) 