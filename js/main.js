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

//////FUNÇÕES///////////////////////////////////////////////////////////
function suma( number1, number2 ) {
	return number1 + number2;
  }

var x = suma(10,20);

alert(x);



////////////


function nameReplace( frase , nome1, novo_nome) {
	return frase.replace(nome1, novo_nome)
}

var nomeTrocado = nameReplace("Eu gosto de morango","morango","cactos!!!")

alert(nomeTrocado)


//////////////


function validadorIdade( idade ) {
	var validar;
	if (idade == 18){
		validar = true

	}else{
		validar = false
	}
	return validar;
}


var idade = prompt("Digite sua idade");

console.log(validadorIdade(idade));

////////////////////////////////////////////////////////

function carregamento(){
	alert("Página carregada")
}


////////////////

function clicou(){
	document.getElementById("mensagem").innerHTML = "<b>Obrigado por clicar !!!!</b>";
	//alert("Obrigado por clicar em mim!!! ")
}


function redirecionar(){
	
	// para abrir em nova aba
	window.open("https://www.w3schools.com/jsref/prop_html_innerhtml.asp")

	// para abrir na mesma aba
	//window.location.href = "https://www.w3schools.com/jsref/prop_html_innerhtml.asp"
}


function porCima(){
	document.getElementById("mouse").innerHTML = "<b>Compre um Lexus</b>"
	//return alert("Você passou o mouse por cima!!!"

}



function voltar(){
	document.getElementById("mouse").innerHTML = "<b>Obrigado por clicar !!!!</b>"
	//return alert("Você passou o mouse por cima!!!"

}


/// function generica para iteragir com o mouse sem ficar mandando
// diferentes ids


function porCima(elemento){
	elemento.innerHTML = "<b>Compre um Lexus</b>"
	//return alert("Você passou o mouse por cima!!!"

}



function voltar(elemento){
	elemento.innerHTML = "<b>Obrigado por clicar !!!!</b>"
	//return alert("Você passou o mouse por cima!!!"

}



function optionList(elemento){
	return alert(elemento.value)

}
