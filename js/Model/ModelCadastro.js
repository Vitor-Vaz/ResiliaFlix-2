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
         let response = JSON.parse(request.responseText);
         this._cidade = response.localidade;
         this._rua = response.logradouro;
         this._bairro = response.bairro;


         callback();
      })
      request.send();
   }
}
