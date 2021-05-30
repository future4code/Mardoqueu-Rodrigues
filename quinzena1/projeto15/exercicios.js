// Exemplos

// Exercício 0A
function soma() {
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura')
  const largura = prompt('Digite a largura')

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  const anoatual = prompt('Digite qual e o ano atual')
  const anonascimento = prompt('Digite qual e o ano do seu nascimento')

  console.log(Number(anoatual) - Number(anonascimento))
}

// Exercício 3
function calculaIMC() {
  const peso = prompt('Digite qual e o seu peso')
  const alturametros = prompt('Digite qual e sua altura')

  console.log(Number(peso) / (Number(alturametros) * Number(alturametros)))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite qual e o seu nome')
  const idade = prompt('Digite qual e sua idade')
  const email = prompt('Digite qual e o seu email')

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite qual e sua cor favorita 1')
  const cor2 = prompt('Digite qual e sua cor favorita 2')
  const cor3 = prompt('Digite qual e sua cor favorita 3')

  console.log(["" + cor1, cor2, cor3 + ""])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const duasletras = prompt('Digite duas letras')

  console.log(duasletras.toLocaleUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoteatro = prompt('Digite o valor do espetaculo')
  const ingresso = prompt('Digite quanto custa a entrada')
  const compensacusto = (custoteatro/ingresso)

  console.log(compensacusto)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt('Digite algo')
  const string2 = prompt('Digite algo novamente')
  const comparacao1 = string1.length
  const comparacao2 = string2.length

  console.log(comparacao1 === comparacao2)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt('Digite algo')
  const string2 = prompt('Digite algo novamente')

  console.log(string1.toLowerCase() === string2.toLowerCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const anoatual = Number(prompt('Digite ano em que estamos'))
  const nascimento = Number(prompt('Digite ano em que nasceu'))
  const ctpsemitida = Number(prompt('Digite ano em que sua ctps foi emitida'))

  const idade = anoatual - nascimento
  const renovarctps = anoatual - ctpsemitida 
  const verificarenovarctps = 
    idade <= 20 && renovarctps >= 5
    || idade > 20 && idade <= 50 && renovarctps >=10
    || idade > 50 && renovarctps >=15

  console.log(verificarenovarctps)
}

// Exercício 11
function checaAnoBissexto() {
  const anoqualquer = Number(prompt("Digite um ano para saber se é bisexto ou nao"))
  const multiplo400 = anoqualquer % 400 === 0
  const multiplo4 = anoqualquer % 4 === 0
  const multiplo100 = anoqualquer % 100 === 0

  console.log(multiplo400 || multiplo4 && !multiplo100)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos, sim ou não?")
  const ensinomedio = prompt("Você tem ensino médio, sim ou não?")
  const horarios = prompt("Você tem disponibilidade de horario, sim ou não?")

  console.log(idade === "sim" && ensinomedio === "sim" && horarios === "sim")
}
