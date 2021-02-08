class FilmeController{


    static carregaFilme(nomeFilme){

        

        let filme = new FilmeModel()
        // let nomeArray = nomeFilme.split(" ");
        // let nomeConvertido = "";
        // for(let i = 0; i < nomeArray.length; i++){
        //     nomeConvertido += nomeArray[i] + '+';
        // }
        // nomeConvertido = nomeConvertido.pop();
        // console.log(nomeConvertido);

        filme.criaMovie(nomeFilme, () => {
            

            FilmeView.colocaElementos(filme);
        })

        


    }


}






document.getElementById('procuraFilme').addEventListener("click", (event) => {
    event.preventDefault()
    FilmeController.carregaFilme(document.getElementById('pesquisaFilme').value);
    console.log("nomeFilme");
})


//console.log("To aqui");