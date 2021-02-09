class ControlerCadastro{
  searchCep(cep){
   
     let cepModel = new ModelCadastro();
     cepModel.cepRequest(cep);
     
     let cepView = new ViewCadastro(cepModel);
     
  }
}

let cadastroController = new ControlerCadastro();
 
let cep = document.getElementById("inputCep");


document.getElementById("buttonCep").addEventListener("click",(e)=>{
   e.preventDefault();
   cadastroController.searchCep(cep.value);
   
})