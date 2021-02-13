function logar(){
    let login = document.getElementById("btn-login");
      login.addEventListener("click", (event)=>{
         event.preventDefault()
         let inputEmail = document.getElementById("input-email-login").value;
          let inputPassword = document.getElementById("input-password-login").value;
         const valorEntrada = JSON.parse(localStorage.getItem("entrar"))
         if(inputEmail == valorEntrada.email && inputPassword == valorEntrada.password)
         alert("Logado")
         else
         alert("não cadastrado")
      })
 }
logar();

