class ModelCadastro{
   constructor(){
      this._bairro ='';
      this._cidade = '';
      this._rua='';
      this._cidade=''
      this._cep=''
   }
get bairro(){
   return this._bairro;
}
get rua(){
   return this._rua;
}
get cidade(){
   return this._cidade
}
   cepRequest(cep, callback){

      let request = new XMLHttpRequest();
      request.open("GET", `https://viacep.com.br/ws/${cep}/json/`);
      request.addEventListener('load',()=>{
      try{
         if(request.status == 200){
            let response = JSON.parse(request.responseText);
            this._cidade = response.localidade;
            this._rua = response.logradouro;
            this._bairro = response.bairro;
            callback();
          }
          else{
            request.error404();
            throw new Error("Algo está errado");
         }
      }catch(e){
         console.log(e);
      }
      });
      request.send();
   }
}
