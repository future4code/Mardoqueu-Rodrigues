/*
let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  // 11

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19 // array 3,19,5,6,7,8,9,10,11,12,13
console.log('e. ', array)

const valor = array[i+6] // nao entendi.
console.log('f. ', valor) 
*/

// exercicio 02
/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // todas maiusculas e trocou o A pelo I com a quantidade de caracteres.
*/



// exercicio 3 
/*
const name = prompt("Digite seu nome")
const email = prompt("Digite seu email")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${name}!`)*/

// exercicio 4

/*Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima na tela o array completo -

    b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. 
    Imprima na tela a nova lista */
/*
    let favoriteEats = ["churrasco" , "japones" , "pizzas" , "feijoada" , "lasanha"]
    console.log(favoriteEats)
    console.log(`Essas são minhas comidas favoritas ${favoriteEats.toString().replaceAll(",", "\n" )}`)
    favoriteEats[1] = prompt("Digite sua comida preferida ")
    console.log(favoriteEats[1])
    //favoriteEats[1] = comidadousuario
    console.log("c: " +favoriteEats)
    */

    // exercicio 3   

    let listadetarefas = []
    listadetarefas [0] = prompt("Digite sua primeira atividade do dia ")
    listadetarefas [1] = prompt("Digite sua primeira atividade do dia ")
    listadetarefas [2] = prompt("Digite sua primeira atividade do dia ")
    console.log(listadetarefas)
    numbertaskuser= Number(prompt("Digite um numero de 1 a 3"))
    numbertaskuser = numbertaskuser - 1 
    //console.log(`indice ${numbertaskuser}`)
    listadetarefas.splice(numbertaskuser)
    console.log(listadetarefas)



