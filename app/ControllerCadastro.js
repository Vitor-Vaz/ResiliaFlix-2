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

 
 document.getElementById("inputCep").addEventListener("change",()=>{
    ControlerCadastro.searchCep(document.getElementById("inputCep").value);
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
       erros.push("Insira o email corretamente");
   }

   if (document.getElementById("inputRG").value.length < 8) {
       erros.push("Insira o Rg corretamente");
   }

   if (document.getElementById("inputCep").value.length < 8) {
       erros.push("Insira o cep correto");
   }

   return erros;
}





