// VARIAVEIS ////////////////////////////////////////////////////////////////
var nome = "Gizélly Natal Nakano";
var idade = 32;
var numebe = 100;


console.log(numebe)

console.log(idade)

console.log(nome)

//alert("Eu tenho "+idade +' anos ' +' e meu nome é '   + nome);

frase = "Eu gosto de xícaras"
//alert(frase.replace('xícaras','sol'))

soma = idade + numebe
//alert(soma)
console.log(soma)


var lista = ["maçã", "pera","laranja"]
console.log(lista[0]) //da mesma forma como no python exibe no console o elemento 0 da lista

lista.push("uva")// adiciona uva a lista na ultima posição
console.log(lista)

lista.pop() // exclui o ultimo elemento da lista
lista.pop("pera") // exclui pera
console.log(lista)


console.log(lista.lenth) // exibe o tamanho do objeto

console.log(lista.reverse()) // inverte da última para a primeira posição os elementos da lista

console.log(lista.toString()) // converte para string

console.log(lista.toString()[2]) // converte para string e pega uma posição da string

console.log(lista.join(" - ")) // separa os elementos da lista com a string desejada



var cesta = {"tamanho" : 14,
			 "cor": "azul" }  // cria um dicionario com suas chaves valores

console.log(cesta)
console.log(cesta.tamanho)
console.log(cesta.cor)



var cabelos = [{"cor":"vermelho", "tamanho":"médio"}, // cria lista de dicionarios
			  {"cor":"cinza","tamanho":"comprido"}]

console.log(cabelos) // imprime a lista de dicionarios

console.log(cabelos[0]) // imprime o primeiro dicionario
console.log(cabelos[1]) // imprime o segundo dicionario
console.log(cabelos[0].cor) // imprie o primeiro objeto do primeiro dic da chave cor




// CONDICIONAIS, LAÇOS ////////////////////////////////////////////////////////////////
var dindin = prompt("Quanto dinheiro você tem hoje no banco?")

if (dindin > 32.00){
	alert("Lega, isso é muito dinheiro")
}else{
	alert("Pobrezinho")
}


while (dindin > 32.00){
	console.log(dindin)
	dindin = dindin - 2
}


for (var count = 0; count <=5; count ++) {
	console.log(count)
}


// DATE ///////////////////////////////////////////////////////////////////////

var data = new Date();
console.log(data)
console.log(data.getDay())
console.log(data.getHours())
console.log(data.getMinutes())

