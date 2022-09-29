//trabalhando com javascript em um arquivo externo.



//console.log(nome, "chamando variável criada com var");


//var nome ='Fiap';





/*escreve('exemplo de função nominal')
//função nominal - udf
function escreve (titulo){
    alert(titulo);
}*/


//gravar o numero 7
//existem 7 tipos de erros diferentes no JS
//3 deles são os principais
// 1 SyntaxError - escreveu algo errado
// 2 ReferenceError - chamou alguem que não existe
// 3 TypeError - violou uma regra
// 4 RangeError - estourou o limite de aninhamento ou faixa de valores
// 5 EvalError - existe um comando perigoso no JS, chamado eval. NÃO USE    
// 6 InternalError - memória processamento, crash no chrome ou v8
// 7 URIErrors - erros que acontecem ao consumir dados externos, com url invalidas

//existem 4 formas de criar uma função em JS


//função nominal - sofre hoisting
function mudaTitulo(novoTitulo){
    document.querySelector('h1').innerHTML = novoTitulo;

}

mudaTitulo('Vai Corinthians');

//escopo, orientação a objetos

//empressão de função - Function Expression
//uma função que é armazenada em uma variavel é chamada de expressão de função

//função anônima
//função anonima precisa de um contexto

const mudaTitulo2 = function(novoTitulo) {
    document.querySelector('h2').innerHTML = novoTitulo;
}

mudaTitulo2('Trocando o subtitulo');


//arrow funtions- é uma função criada no ES6 ou ES2015
//não existe i this dentro de uma arrow funtion
//não existe um método construtor
//sintaxe mais simples e prática
const relogio = () =>{
    const date = new Date();
    mudaTitulo2(date.toLocaleTimeString());
}

setInterval(relogio, 1000);

