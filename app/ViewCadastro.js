class ViewCadastro{
   static colocaEndereco(cepModel){
      
      document.getElementById('inputCity').value = cepModel.cidade || "City not found"; 
      document.getElementById('inputState').value =  cepModel.bairro || "Neighborhood not found"; 
      document.getElementById('inputAddress').value = cepModel.rua || "Street not found"; 
  
   }
}

document.getElementById("btnCadastro").addEventListener("click",(event)=>{
   event.preventDefault();
   let form = document.querySelector(".form-cadastro");

   let erros = validaCampos();
   if (erros.length > 0) {
      exibeMensagensDeErro(erros);
      return;
   }

      let ul = document.getElementById("mensagens-erro");
      ul.innerHTML = " ";
      ul.style.backgroundColor="transparent"
      ul.style.color="#ccc";

      let a = document.createElement("a");
      a.setAttribute("href","login.html")
      a.innerHTML=" Login"

      let h3 = document.createElement("h3");
      h3.innerHTML = document.querySelector("#inputName").value;
      

          var li = document.createElement("li");
          li.innerHTML = `Congratulations your registration was successful, now I log in`;
          ul.appendChild(h3)
          ul.appendChild(li);
          li.appendChild(a);
          
          
      form.style.display="none";

            
   
 })