// Padrões de projetos 
// *  FACTORY: Todas as funções que retornam um objeto, sem a necessidade 
// de chamá-las como new, são consideradas funções Factory(fábrica)

function Pessoa(customProperties){
    return{
        name: "Guilherme",
        lastName: "Silva",
        ...customProperties
    }
}

const p1 = Pessoa({name: "Maria", lastName: "Candida",age: 54}); // sobrescrevemos e adicionamos outros atributos

console.log(p1)


//////// SINGLETON 

// o OBJETIVO desse pattern é criar uma única   instância de uma função 
// construtora e retorná-la toda vez que for necessário utilizá-la. 
// ao chamar uma função, se a instancia já estiver definida, ele chama ela, se não tiver 
// ele instancia 

function Crianca(){
    if (!Crianca.instance){
        Crianca.instance = this;
    } 

    return Crianca.instance;
}


const C = Crianca.call({name: "margarida"});

const D = Crianca.call({name: "Rosalina"});

console.log(C); // margarida

console.log(D);  // margarida


///////////////////////////DECORATOR 

// Uma função decorator recebe uma outra função como parâmetro 
// e extende seu comportamento  sem modificá-lo explicitamente 


// exmplo, controlar a execução de uma função que só pode 
// executar se o usuario estiver logado 



function callIfAuhenticated(fn){
    return !!loggedIn && fn();
}

function sum(a,b){
    return a + b;
}

loggedIn = false;
console.log(callIfAuhenticated(()=>sum(2,3)));


loggedIn = true;
console.log(callIfAuhenticated(()=>sum(120,130)));



//////////////MODULE 

// é um pattern que possibilita organizarmos melhor nosso código
// sem a necessidade    de expor variáveis globais.
// basicamente cria uma classe, exporta ela e importa no projeto 


// class Person{
//     constructor(name){
//         this.name = name; 
//     }
// }

// export default Person; 

// import Person from './models/person'; 








const name = 'Foo';
const lastName = String('Bar');

console.log(name.constructor === lastName.constructor)
console.log(name.prototype === String.prototype)
console.log(lastName.__proto__ === String.prototype)
console.log(name.__proto__.split === lastName.__proto__.split)



