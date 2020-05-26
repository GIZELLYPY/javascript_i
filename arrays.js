const arr = [1,2,3,];

// ou 

const arr2 = new Array(1,2,3);


// ou

const arr3 = Array.of(1,2,3);

//ou 

const arr5 = Array(3,2); // [3,2] não é vazio;


// Arrays vazios 

const arr4 = Array(3); // [empty x 3 ]


//Array.from espera por um parametro array.like (node list) ou iterable object 
//const divs = document.querySelectorAll('div') // pega todas as divs da pagina
//const my_arr = Array.from(divs) // converte em array



/// inserir ou remover elementos 

// 1 push adiciona ou ou mais elementos dentro de um array e o 
// retorno da função é o tamanho dessa lista 

const cesta = ['melancia','algas', 'moji'] 

cesta.push('alcatrão', 'cerveja') // seu retorno é o length do array

console.log(cesta)



// pop remove o ultimo elemento do array 

cesta.pop() // seu retorno é o item removido

// unshit adiciona no inicio do array 

cesta.unshift('carros amarelos') // seu retorno é o tamanho do array 

// shift remove no inicio 

cesta.shift() // vai remover o primeiro elemento do array e retornar o item removido




/// concat concatena dois array e retorna um novo array 

const doces = ['bala','pirulito']

const salga = ['coxinha', 'queijo']

festa = doces.concat(salga)

console.log(festa)


//// slice fatia o array através de um intervalo inicio fim de indice 

const contador = [10,20,30,40,50,60]

my_cont = contador.slice(0,2) // posição zero a 2

my_2cont = contador.slice(4) // pega a partir do indice 4, incluindo posição 4

my_3cont = contador.slice(-3) // retorna 3 posições a partir da ultima 

console.log(my_cont)
console.log(my_2cont)
console.log(my_3cont)


///// SPLICE 
// altera um array, adiciona novos elementos enquanto remove elemmentos antiugos 

const canoa = ['tia','mae','avo','pai']

canoa.splice(2) // remove tudo até a posição 2

console.log(canoa)

canoa.splice(0,0,'Navio Titanic') // Na posição zero, não remove nada e adiciona 'Navio Titanic'

console.log(canoa)


//////  forEach -> iterando arrays 

const mouse = ['onça', 'queijo', 'palido']
 
mouse.forEach((value,index) => {
    console.log(index +  value)
})



//// map - Retorna um novo array desse array iterando acada item do array 

const carrugagem = [5,4,7,8,9]

carrugagem.map((item,index) => {index + item})

///// flat retorna um array unico de um objeto de arrays aninhados 

const aninhado = [1,2,3,[14,47]]

aninhado.flat();  // [1,2,3,14,47]


////// FlatMap, retorna um novo array assim como map mas de profundidade 1 

my_car = [14,15,87,98]

my_car.flatMap(value => [ value * 2 ]); 
// [2,4,6,8]

my_car.flatMap(value => [[value * 2]]);
// [[2],[4],[6],[8]]



///// keys -> itera um array pelo indice 

const stro = [7,8,9,4,5,6,1,2,3]

const stroIterator =  stro.keys()

stroIterator.next() // key 0 
stroIterator.next() // key 1 
stroIterator.next() // key 2 ... etc 


/////////////values retorna os valores 

const stro1 = [7,8,9,4,5,6,1,2,3]

const stroIterator1 =  stro1.values()

stroIterator1.next() // value 0 
stroIterator1.next() // value 1 
stroIterator1.next() // value 2 ... etc 


//////// entries -> retorna par de chave valor 

const stro2 = [7,8,9,4,5,6,1,2,3]

const stroIterator2 =  stro2.entries()

stroIterator2.next() // entries 0 
stroIterator2.next() // entries 1 
stroIterator2.next() // entries 2 ... etc 


/////////// find -> Buscar elementos 

const stro3 = [7,8,9,4,5,6,1,2,3] 

const firstGreaterThanTwo = stro3.find(value => value > 2); 

console.log(firstGreaterThanTwo) // retorno o primeiro item maior que 2 


/// findIndex retorna o o primeiro indice conforme determinada condição assim como no caso acima 



//// filter retorna um array com todos os elementos que satisfazem uma condição 

const stro4 = [7,8,9,4,5,6,1,2,3] 

const fmyFilter = stro4.filter(value => value > 2); 

console.log(fmyFilter)


///////// indexOf procura o indice da primeira ocorrencia de alguma termo 

const stro5 = [7,8,9,4,5,6,1,2,3] 

const fmy = stro5.indexOf(3); 

console.log(fmy)

////////////////  lastIndexOf retorna o ultimo indice em que um elemento ocorre


///////// includes retorna tur or false de um determinado item está dentro de um array 

const stro6 = [7,8,9,4,5,6,1,2,3] 

stro6.includes(1); // true
stro6.includes(100); // false 



//////// some verifica se pelo menos um item do array satisfaz uma condição 
const stro7 = [1,3,4,7,9]

const hasSomeEvenNumber = stro7.some(value => value % 2 ===0 );


/////////// every retorna se todos os itens satisfazem determinada comdição 

const stro8 = [2,4,6,8,10]

const hasEveryNumber = stro8.some(value => value % 2 ===0 ); // true


///////// sort ordena elementos de um array de acordo com determinada condição 

//// reverse ordena elementos 

///// reduce itera cada posição e retorna um array ou novo tipo de dado 

const stro9 = [2,4]

stro9.reduce((total,value) => total += value,0); // 6 


/////////





















