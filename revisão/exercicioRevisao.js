console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')


// String X Template string é a maneira de concatenar mais utilizada no mercado
//Atribua a uma variavel templateString a frase com concatenação.

let balance = "89.000"


const myBalance = `My balance is : ${balance}.`
console.log(myBalance)
const myBalance2 = "My balance2 is :" + balance + "."
console.log(myBalance2)

// ----------------------------------------------



console.log('-----------------------------------------------------')
console.log('Functions')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia utilize o metodo function

/*  Primeira forma de declarar uma função :

function soma(x,y) {
    var num_um = 9 
    var num_dois = 15
    var total = num_um + num_dois
    return ("Valor total da soma: " + total)
    
}
console.log(soma())*/


//Segunda forma de declarar uma função :
// Vamos refatorar essas funções para a sintaxe de Arrow function
const sum = () => { // eu declaro minha função soma, nome dela, depois disso eu atribuo o valor que é a função de somar
    var num_one = 9
    var num_two = 15
    var total = num_one + num_two
    return ("Valor total da soma: " + total)

}
console.log(sum())

function double(num) {
    return num * 2
}

//console.log(double()) 

const doubleTime = (num) => num * 2
console.log('-----------------------------------------------------')
console.log(`Minha Arrow Function tem o resultado de: ${doubleTime(20)}`)
console.log(`Minha Function antiga tem o resultado de: ${double(10)}`)
console.log('-----------------------------------------------------')

const calcularMediaNormal = function (nota1, nota2, nota3) {
    const soma = (nota1 + nota2 + nota3)
    const media = soma / 3
    return media
}

const calcularMediaArrow = (nota1, nota2, nota3) => {
    const soma = (nota1 + nota2 + nota3)
    const media = soma / 3
    return media
}

console.log('-----------------------------------------------------')
console.log(`Minha Arrow Function Media tem o resultado de: ${calcularMediaArrow(7, 7, 7)}`)
console.log(`Minha Function antiga tem o resultado de: ${calcularMediaNormal(8, 8, 8)}`)
console.log('-----------------------------------------------------')
//Pronto, ja refatoramos para o javascript mais moderno!

console.log('-----------------------------------------------------')
console.log('Callback')
// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.

function somar(a, b) {
    return a + b
}
console.log(`Minha função somar é : ${somar(2, 2)}`)

function subtrair(a, b) {
    return a - b
}
console.log(`Minha função subtrair é : ${subtrair(2, 2)}`)
function multiplicar(a, b) {
    return a * b
}
console.log(`Minha função multiplicar é: ${multiplicar(2, 2)}`)
function dividir(a, b) {
    return a / b
}
console.log(`Minha função dividir é: ${dividir(2, 2)}`)

function ordenar(a, b) {
    if (a <= b) {
        return [a, b]
    } else {
        return [b, a]
    }
}
console.log(ordenar(70, 15))
//console.log(ordenar(15,70))
//console.log(`Minha ordenar: ${ordenar(70,15)}`)



// refatore as funções na sintaxe ES6

console.log('-----------------------------------------------------')
console.log('refatore as funções na sintaxe ES6')

const somar2 = (a, b) => a + b
console.log(`Minha Arrow Function de somar: ${somar2(3, 3)}`)
const subtrair2 = (a, b) => a - b
console.log(`Minha Arrow Function de subtrair: ${subtrair2(3, 3)}`)
const multiplicar2 = (a, b) => a * b
console.log(`Minha Arrow Function de multiplicar: ${multiplicar2(3, 3)}`)
const dividir2 = (a, b) => a / b
console.log(`Minha Arrow Function de dividir: ${dividir2(3, 3)}`)
const ordenar2 = (a, b) => {
    {
        if (a <= b) {
            return [a, b]
        } else {
            return [b, a]
        }
    }

}
console.log(`Minha Arrow Function de ordenar: ${ordenar2(5, 3)}`)
console.log('-----------------------------------------------------')


// Crie uma função chamada resultado que receberá como parâmetro: dois números e uma função de callback

/* function resultado (a,b, callback){
    return callback(a,b)
} */

// Refatore a função resultado na sintaxe ES6
const resultado = (a, b, callback) => callback(a, b)

// Faça a soma de dois números usando a função resultado e chamada callback 
const resultadoSoma = resultado(5, 5, somar)
console.log(`Minha Arrow Function de callback somar de 5 + 5 é : ${resultadoSoma}`)


// Faça a subtração de dois números usando a função resultado e chamada callback 
const resultadoSubtrair = resultado(5, 5, subtrair)
console.log(`Minha Arrow Function de callback subtrair de 5 - 5 é : ${resultadoSubtrair}`)

// Faça a multiplicação de dois números usando a função resultado e chamada callback 
const resultadoMultiplicacao = resultado(5, 5, multiplicar)
console.log(`Minha Arrow Function de callback multiplicar de 5 * 5 é : ${resultadoMultiplicacao}`)



// Faça a divisão de dois números usando a função resultado e chamada callback 
const resultadoDivisao = resultado(5, 5, dividir)
console.log(`Minha Arrow Function de callback divisao de 5 / 5 é : ${resultadoDivisao}`)



// Faça a ordenação crescente de dois números usando a função resultado e chamada callback 
const resultadoOrdenar = resultado(5, 6, ordenar)
console.log(`Minha Arrow Function de callback ordenar de 6 e 5 é : ${resultadoOrdenar}`)





console.log('-----------------------------------------------------')
console.log('Condicionais')
// CONDICIONAIS e Operador Condicional Ternário
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 6

// Verifique se a estudante foi aprovada, utilizando a função calcularMedia. 
//Se a média das notas for maior ou igual a 7, a estudante passou!
function calcularMedia(n1, n2, n3) {
    mediaCalcular = n1 + n2 + n3
    if (mediaCalcular >= 7) {
        return 'Aluno está : aprovado'
    } else {
        return 'Aluno está : reprovado'
    }
}
console.log(calcularMedia(9, 7, 7))

console.log('-----------------------------------------------------')

/*const calcularMedia2 = (n1,n2,n3) => {
 let mediaCalcular2 = (n1 + n2 + n3) 
  (mediaCalcular2 <=7) ? "Reprovada" : "Aprovada" 
   
 
}


console.log(`Minha Arrow Function CalcularMedia é: ${calcularMedia2(5,4,2)}`)
*/



//volte e refatore a função ordenar

const ordenarRefatorada = (a, b) => (a <= b) ? [a, b] : [b, a]
console.log(`Minha Arrow Function ordenarRefatorada é: ${ordenarRefatorada(70, 10)}`)

console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos

const objeto = new Object()
objeto.nome = "cadeira"
objeto.tipo = "madeira"
objeto.peso = "7"

objeto.nome = "mesa"
objeto.tipo = "madeira"
objeto.peso = "5"

console.log(objeto)



// Fazer destructuring e acessar os valores de objeto 

/*const nome = objeto.nome
console.log(`Esse é o nome do objeto :${nome}`)
const tipo = objeto.tipo
console.log(`Esse é o tipo do objeto :${tipo}`)
const peso = objeto.peso
console.log(`Esse é o peso do objeto : ${peso}`)*/

const {nome, tipo, peso} = objeto
console.log(`Esse é o nome do objeto :${nome}`)
console.log(`Esse é o nome do objeto :${tipo}`)
console.log(`Esse é o nome do objeto :${peso}`)


console.log('-----------------------------------------------------')

// Declare um objeto aluna com as propriedades, Nome Completo, turma e ID


const Aluna = new Object
Aluna.nome2 = "Ana Carolliny"
Aluna.turma = "Turma back-end 14"
Aluna.id = "01"





//acessando o valor nome completo
console.log(Aluna)


//desestruturando alunas
const {nome2, turma, id} = Aluna
console.log(`Esse é o nome do objeto :${nome2}`)
console.log(`Esse é o nome do objeto :${turma}`)
console.log(`Esse é o nome do objeto :${id}`)

console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')
const alunasReprograma = {
    nomeCompleto : "Ana Carolliny dos Santos Sacramento",
    IdAlunas : "02",
    Turma : "On15",
    apresentacao : () => `Olá, ${alunasReprograma.nomeCompleto} - turma ${alunasReprograma.Turma}, seu id é ${alunasReprograma.IdAlunas}.` 
}

console.log(alunasReprograma.apresentacao())
// Vamos criar a classe Alunas

class AlunasReprograma{
    constructor(name, id, classe){
        this.name = name
        this.id = id
        this.classe = classe
    }
    apresentacao(){
        return `Olá, ${this.name} - Turma ${this.classe}, Id ${this.id}.`
    }    
}

const aluna1 = new AlunasReprograma("Hanna", "On15", "03")
console.log(aluna1)
const aluna2 = new AlunasReprograma("Carol", "On15", "04")
console.log(aluna2)
const aluna3 = new AlunasReprograma("Rafa", "On15", "05")
console.log(aluna3)
const aluna4 = new AlunasReprograma("Kamila", "On15", "06")
console.log(aluna4)


console.log('-----------------------------------------------------')
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays


// Acessando elementos pela posição do array


// Informe o tamanho de cada array

// Faça a desestruturação do array



console.log('-----------------------------------------------------')

// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')


console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')