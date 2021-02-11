class ViewCadastro{
   static colocaEndereco(cepModel){


      document.getElementById('inputCity').value = cepModel.cidade || "Cidade não encontrada"; 
      document.getElementById('inputState').value =  cepModel.bairro || "Bairro não encontrada "; 
      document.getElementById('inputAddress').value = cepModel.rua || "Rua não encontrada "; 
  
   }
}

document.getElementById("btnCadastro").addEventListener("click",(event)=>{
   event.preventDefault();
   let erros = validaCampos();
   if (erros.length > 0 && confirm == 1) {
      exibeMensagensDeErro(erros);
      return;
   }else{
      let ul = document.getElementById("mensagens-erro");
      ul.innerHTML = " ";
      ul.style.backgroundColor ="#8bc34a"
      let a = document.createElement("a");
      a.setAttribute("href","index.html")
      a.innerHTML=" Login"
          var li = document.createElement("li");
          li.innerHTML =`Cadastro efetuado com sucesso`;
          li.appendChild(a)
          ul.appendChild(li); 
   }
 })