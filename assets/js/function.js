//'use strict' - js mais polido possível
//diferenças entre arrow function e função nominal ou expressões de função



const resultado = document.querySelector('#resultado');

let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

//chamando função
myFunc1.showArguments(
    'Vai Cor',
    'FullStack',
    'React',
    'NodeJS',
    'TYPESCRIPT'
);


//explicar spred operator, destructuring assignment 

//arrow function nao acessa arguments
let myFunc2 = {
    showArguments: () => {
       // resultado.innerHTML = arguments;
        //onsole.log(...arguments);
    },
};

myFunc2.showArguments(
    'Vai Cor',
    'FullStack',
    'React',
    'NodeJS',
    'TYPESCRIPT'
);


//this não existe no arrow
let user = {
    name: 'Tifane',
    usandoArrow: () => {
        console.log('meu nome', this.name, 'arrow function')
    },
    usandoNominal() {
        console.log('meu nome e', this.name, 'nominal functions')
    },
};
user.usandoArrow();
user.usandoNominal();





/**
 
{
    "name":"Glaucio Daniel",
    "email":"glauciodaniel@gmail.com",
    "password": "123456"
}

const {password, ...data} = await prisma.user.findById(1);

return data;

 */
