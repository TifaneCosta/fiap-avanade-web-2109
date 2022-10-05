const cep = document.querySelector("#cep");

const showData = (result) =>{
    //forEach para arrays
    //for in
    for(const campo in result){
        if(document.querySelector('#' + campo)){
            document.querySelector('#' + campo).value = result[campo];
            }
        }
}

cep.addEventListener('blur', async (e)=>{
    let search = cep.value.replace('-','');

    if(search.length < 8 || Number(search.value) === NaN) {
        alert('cep invalido');
        cep.focus();
        return;
    }
//criar um objeto
   const options = {
    method: 'GET',
    mode: 'cors',
    cahce: 'default',
   };
//toda função que é assíncrona tem que começar com async
try {
const resultado = await fetch(
    `https://viacep.com.br/ws/${search}/json/`, 
    options
);

const json = await resultado.json();
showData(json);
} catch (error) {
    console.log('Temos um problema', error.message);
}
});

   /*fetch(`https://viacep.com.br/ws/${search}/json/`, options)
   .then(response => {
        response.json()
        .then(result =>{
            console.log(result);
        })
   })
   .catch(err =>{console.log(e.message)}); */



//sempre que tiver uma promise, pode usar um async/await, onde tiver await o async tem que estar
//recurso assíncrono retorna uma promise porque não sei se se irá funcionar
//fetch é uma intenção, porque o site é externo
//Promise é um recurso que não tenho certeza se deu certo ou não, é uma inenção
//se der certo ele vai retornar o resolve, se der errado ele retorna reject.
//resolver quer dizer, funcionou, aí usamos a função then, se der errado usamos o catch

//CORS - Cross-Origin Resource Sharing

//https://viacep.com.br/ws/01311100/json/
    
//replace é para trocar o tracinho por nada
//value pegar o que a pessoa digitou
//só posso pegar o que uma pessoa digitou, o value, depois de um evento
//só posso pegar algo no formulário depois de um evento
//blur é perder o foco
//NaN - not a number









//conteudo da prova
//array
//eventos
//DOM - queryselector