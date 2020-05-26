// Curryng 

// Currying é o processo de transformar uma função que espera vários 
// argumentos em uma função que espera um único argumento e retorna 
// outra função curried. Por exemplo, uma função que recebe três 
// argumentos, ao sofrer currying, resulta em uma função que recebe 
// um argumento e retorna uma função que recebe um argumento, que 
// por sua vez retorna uma função que 
// recebe um argumento e retorna o resultado da função original.



function soma(a){
    return function(b){
        return a + b; 
    }
}


const soma2 = soma(2) // const  vamos definir o a sempre com o valor 2

soma2(3)
soma2(4)



////////////////

// Hoisting - Levantar ou suspender algo
// Hoisting tem dois tipos, variaveis e funções
// Hoisting 

function fn() { // Hoisting com variaveis
    console.log(texto); // em muitos codigos isso poderia dar erro pois a variavel ainda ão foi criada
    // retorna "undefined"


    var texto= "Que rei sou eu";

    console.log(texto)
    // retorna "Que rei sou eu"

}


function fn(){ // Hoisting de função 

    log_("olá mundo lindo!"); //  perceba que executamos uma função antes da criação

    function log_(value) {
        console.log(value)
    }
}




///IMUTABILIDADE 
// Linguagens funciuonais, os dados criados nunca mudam, 
const user = {
    name = 'Gizelly',
    lastName = 'Nakano'
};


function getUserWithFullName(user){
    return{
        ...user,
        fullName: '${user.name} ${user.lastName}'

    }
}



const userWithFullname =  getUserWithFullName(user);

console.log(userWithFullname)



/// tipos de variáveis:
// var 

// introduz o escopo de bloco ente {}
// let 
// const


// string
// boolenan 
// number
// null
// undefined
// symbol 
// function 
// object
// Array 


//////////////////////////////////////////





