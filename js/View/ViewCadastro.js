class ViewCadastro{
   static colocaEndereco(cepModel){

      console.log(this.cidade);
      document.getElementById('inputCity').value = cepModel.cidade || " "; 
      document.getElementById('inputState').value =  cepModel.bairro || " "; 
      document.getElementById('inputAddress').value = cepModel.rua || " "; 
      
      
      
   }
}