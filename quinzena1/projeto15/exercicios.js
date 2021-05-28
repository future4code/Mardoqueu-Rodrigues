// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('Digite a altura')
  const largura = prompt('Digite a largura')
  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoatual = prompt('Digite qual e o ano atual')
  const anonascimento = prompt('Digite qual e o ano do seu nascimento')
  console.log(Number(anoatual) - Number(anonascimento))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt('Digite qual e o seu peso')
  const alturametros = prompt('Digite qual e sua altura')
  console.log(Number(peso) / (Number(alturametros) * Number(alturametros)))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Digite qual e o seu nome')
  const idade = prompt('Digite qual e sua idade')
  const email = prompt('Digite qual e o seu email')
  console.log("Meu nome é "+nome+ ", tenho " +idade+ " anos, e o meu email é "+email+ ".")

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Digite qual e sua cor favorita 1')
  const cor2 = prompt('Digite qual e sua cor favorita 2')
  const cor3 = prompt('Digite qual e sua cor favorita 3')
  console.log(["" +cor1, cor2, cor3 +""])

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const duasletras = prompt('Digite duas letras')
  console.log(duasletras.toLocaleUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoteatro = prompt('Digite o valor do espetaculo')
  const ingresso = prompt('Digite quanto custa a entrada')
  const compensacusto = (custoteatro/ingresso)
  console.log(compensacusto)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = prompt('Digite algo')
  const string2 = prompt('Digite algo novamente')
 const comparacao1 = string1.length
 const comparacao2 = string2.length
 console.log( comparacao1 == comparacao2)
  
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = prompt('Digite algo')
  const string2 = prompt('Digite algo novamente')
  console.log( string1 = string2)
  
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}