//sobre o spread

const aereasNacionais = ['Azul', 'Gol', 'Latam'];

const airCompanies = [...aereasNacionais, 'Delta', 'United Airlines', 'Emirates', 'Qatar', 'Tap'];

//console.log(airCompanies);


//atribuição por desestruturação 


const [azul, voeGol, latam, delta, ...internacionais] = airCompanies;

console.log(voeGol, 'verificando a variavel delta');
console.log(internacionais, 'verificando a variavel internacionais');


//Object Relation Map - ORM - tabela SQL ou documento NoSQL - transforma em Objetos.
//hibernate - Java
//NodeJS - typeORM (Definição de estruturas de tabelas - DDL) - Prisma (Manipular os Dados)
const user = {
        name: 'Tífane',
        email: 'costatifane@yahoo.com',
        password:'12345'
}

const {password, ...data} = user
console.log(data, 'retornando dados API');


//eventos - JS é uma linguagem dirigida a eventos. Algo acontece, então reagimos (executamos uma função).
//Eventos de tempo - setTimeout, setInterval
//Eventos de Dom - onclick, onChange, onSubmit
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus, onBlur, onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad, onError, onAbort
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus, onBlur, onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad, onError, onAbort


//Funções, arrays, eventos, assíncrono, controle de fluxo (estrutura de controle e loops), objetos, API Externa
//javascript.info


//quem.addEventListener('evento, função); - quem é o elemento que vai receber o evento.

const body = document.querySelector('body');
body.style.width = '100%';
body.style.height = '100vh';
body.addEventListener('mouseover', (event) => {
    body.style.background = '#d4d4de';
    console.log('executou o evento');
});