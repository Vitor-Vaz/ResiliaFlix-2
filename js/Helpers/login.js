class Login{
   static loginCorreto (){
      let inputEmail = document.getElementById("input-email-login").value;
      let inputPassword = document.getElementById("input-password-login").value;
      const valorEntrada = JSON.parse(localStorage.getItem("entrar"));

         if(inputEmail === valorEntrada.email && inputPassword === valorEntrada.password){
            //Mudar para home
            window.location.href="home.html";
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

document.addEventListener('keydown', ( event ) =>{
   //Tecla modificadora, CapsLock
   //getModifierState, verifica o estado atual da tecla
   let flag = event.getModifierState && event.getModifierState('CapsLock');
   let p = document.getElementById("caps-lock");
   // Opedador condicional ? EX: condicao ? valor1 : valor2 
   //Se condicao for verdadeira, o operador terá o valor de valor1. Caso contrário, terá o valor de valor2
   p.textContent = flag ? "CapsLock Ativado !" : " "; 
 });



