class ControlerCadastro{
   static searchCep(cep){
    
      let cepModel = new ModelCadastro();
      cepModel.cepRequest(cep, () => {
 
       ViewCadastro.colocaEndereco(cepModel);
      });
      
 
      // console.log(cepModel);
   }

 }
 let confirm = [];

 document.getElementById("inputConfirmPass").addEventListener("change",()=>{
    let inputPass = document.getElementById("inputPassword");
    let inputPassConf = document.getElementById("inputConfirmPass");
    if(inputPass.value == inputPassConf.value){
      confirm = 1
      inputPass.classList.remove("is-invalid")
      inputPassConf.classList.remove("is-invalid") 
       inputPass.classList.add("is-valid")
       inputPassConf.classList.add("is-valid") 

    }
    else{
       confirm = 0
      inputPass.classList.remove("is-valid")
      inputPassConf.classList.remove("is-valid") 
      inputPass.classList.add("is-invalid")
      inputPassConf.classList.add("is-invalid")
    }
 })


 document.getElementById("inputCep").addEventListener("input",()=>{
    ControlerCadastro.searchCep(document.getElementById("inputCep").value.toString());
 })

 function exibeMensagensDeErro(erros) {
   let ul = document.getElementById("mensagens-erro");
   ul.innerHTML = " ";

   erros.forEach(function(erro) {
       let li = document.createElement("li");
       li.textContent = erro;
       ul.appendChild(li);
   });
}

 function validaCampos() {

   let erros = [];
   
   
   if (document.getElementById("inputEmail").value.length < 11) {
       erros.push("Insert the E-mail correctly");
   }

   if (document.getElementById("inputRG").value.length < 8) {
       erros.push("Insert the RG correctly");
   }

   if (document.getElementById("inputCep").value.length < 8) {
       erros.push("Enter the correct zip code");
   }

   if (document.getElementById("inputCity").value == "City not found") {
      erros.push("City not found");
  }

  if (document.getElementById("inputState").value == "Neighborhood not found") {
   erros.push("Neighborhood  not found");
   }

   if (document.getElementById("inputAddress").value == "Street not found") {
   erros.push("Street not found");
   }

   if(confirm == 0){
      erros.push("Passwords must be the same");
   }

   return erros;
}





