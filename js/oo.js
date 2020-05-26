//// ////// exemplo 1 

'use strict';

function Animal(){
    this.qtdePatas = 4;
} // Aqui a função construtora é chamada com os argumentos especificados 
// e com o 'this' vinculado ao novo objeto criado. 
// Caso a função tenha um retorno explicito, será respeitado o seu return
// Senão,   será retornado o objeto criado no passo 1 

const carrocho = new Animal();

console.log(carrocho.qtdePatas) // out 4 

function Cachorro(morde){
    Animal.call(this,4);
    this.morde = morde;
    this.latir = function(){
        console.log('Au! Au!');
    }
}

const pug = new Cachorro(false);

console.log(pug);






////////// exmplo 2 

function Pessoa(){
    this.nome = 'Jão'
}

const pessoa1 = new Pessoa();

console.log(pessoa1.nome)


/////////// exemplo  3 prototype
// objeto._proto_ é uma lista de metodos do objeto que podem ser usados

'use strictic'; 
function Animal(){
    Animal.prototype.qtdePatas = 0;
    Animal.prototype.movimentar = function(){}
}


function Cachorro(morde){
    this.qtdePatas = 4;
    this.morde = morde;
}


Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log("Au Au");
}


const boxer = new Cachorro(false);
const pitbull = new Cachorro(true);


//////clas , uma simplificação dos prototipos 
// por baixo dos panos cria um prototype 


class Animal {
    constructor(qtdePatas){
        this.qtdePatas = 4;
    }
}


class Cachorro extends Animal{
    constructor(morde){
        super(4);
        this.morde = 4; 
    }
}


const xiuaua = new Cachorro(false);

console.log(xiuaua)

