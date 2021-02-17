class Login{
   static loginCorreto (){
      let inputEmail = document.getElementById("input-email-login").value;
      let inputPassword = document.getElementById("input-password-login").value;
      const valorEntrada = JSON.parse(localStorage.getItem("entrar"));

         if(inputEmail === valorEntrada.email && inputPassword === valorEntrada.password){
            //Mudar para home
            window.location.href="paginaInicialHome.html";
         }
         else{
           document.querySelector(".invalid-feedback").style.display="block";
         }
    }
}

let login = document.getElementById("btn-login");
login.addEventListener("click", (event)=>{
   event.preventDefault();
   Login.loginCorreto();
})



