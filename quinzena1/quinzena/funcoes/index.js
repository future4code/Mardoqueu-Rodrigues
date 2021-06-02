// ex001
//function minhaFuncao(variavel) {
//	return variavel * 5
//}

// console.log(minhaFuncao(2)) 10,50 
// console.log(minhaFuncao(10))Aparece em branco

// ex 002


/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario) qualquer texto que contem a palavra cenoura é verdadeiro ou contrário e falso
console.log(resposta)*/


// exercicio A


// function minhaFuncao( ) {
//     const pessoa = " Meu nome é " +nome+ " tenho " +idade+ " anos e morador de " +cidade+ " e sou " +job  
//     return pessoa
// }

//  console.log(minhaFuncao())
//  console.log("Maryene" , 19, "Inglesa " , "Liverpool " , " Atriz ")



// exercicio B

// function minhaFuncao(nome, idade, cidade, job) {
//     const pessoa = " Meu nome é " +nome+ " tenho " +idade+ " anos e morador de " +cidade+ " e sou " +job  
//     return pessoa
// }

//  console.log(minhaFuncao("Ana" , 24 , "Seatlle" ,"Atriz"))
//  console.log("Maryene" , 19, "Inglesa " , "Liverpool " , " Atriz ")


 // Exercicio 2 A
//  function receberNumeros(numero1 , numero2) {
//     let resultado = numero1 + numero2 
//     return resultado
// }
//     console.log(receberNumeros(10 , 55))
//     console.log("Resultado é:" ,resultado)

 // Exercicio 2 B
// function receberNumeros(numero1 , numero2) {
//     let resultado = numero1 >= numero2 
//     return resultado
// }
//     console.log(receberNumeros(1 , 55))

 // Exercicio 2 C
//  function receberNumero(numero1 ,) {
//     let resultado = numero1 %2 ==0
//     return resultado
// }
//      console.log(receberNumero( 55))

// Exercicio 2 D - ok

// function mostrarMensagem(msg) {
//     const resultado = msg.toUpperCase() + " tem " + msg.length + " caracteres."

//     return resultado
// }

// const recebeConteudo = (prompt("Olá escreva seu texto aqui"))
// const retornoDaFuncao = mostrarMensagem(recebeConteudo) // recebe o valor do retorno da função inteira
// console.log(retornoDaFuncao)


//Exercicio 3

function somar(){
    const somando = numeroPrimeiro + numeroSegundo
    return somando 
}

function diminuir(){
    const somando = numeroPrimeiro - numeroSegundo
    return somando 
}

function multiplicar(){
    const somando = numeroPrimeiro * numeroSegundo
    return somando 
}

function dividir(){
    const somando = numeroPrimeiro / numeroSegundo
    return somando 
}

const numeroPrimeiro = Number(prompt("Digite um numero qualquer"))
const numeroSegundo = Number(prompt("Digite outro numero"))

console.log("Numeros inseridos: " + numeroPrimeiro + " e "  + numeroSegundo)
console.log("Soma: " + somar())
console.log("Direfença: " + diminuir())
console.log("Multiplicação: " + multiplicar())
console.log("Divisão: " + dividir())
 