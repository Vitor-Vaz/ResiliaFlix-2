class ControlerCadastro{
  static searchCep(cep){
   
     let cepModel = new ModelCadastro();
     cepModel.cepRequest(cep, () => {

      ViewCadastro.colocaEndereco(cepModel);
     });
     

     console.log(cepModel);
  }
}


document.getElementById("buttonCep").addEventListener("click",(e)=>{
   e.preventDefault();
   ControlerCadastro.searchCep(document.getElementById("inputCep").value);
   
})