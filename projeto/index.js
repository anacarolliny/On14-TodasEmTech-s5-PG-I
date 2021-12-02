console.log('-----------------------------------------------------------------------------------')
console.log('                     Bem vindo ao meu arsenal de Livros do J.R.R Tolkien       ')
console.log('-----------------------------------------------------------------------------------')
console.log(' Aqui você encontra as melhores obras deste autor')
console.log('-----------------------------------------------------------------------------------')


//vamos instanciar, o nosso banco de dados
const livros = require('./database')
console.table(livros);

//ordenando por número de volumes de forma crescente
livros.sort((a, b) => a.volume - b.volume)
console.table(livros);

//pegando entradas importando o readline-sync
const entry = require('readline-sync')

//agora será como fazer uma pergunta para responder no terminal 
const takelivros = entry.question('Voce deseja ver os livros por uma categoria? (S/N) ').toLocaleUpperCase()
console.log(takelivros);

//caso a verificaçao seja positiva
if(takelivros === 'S') {
    console.log('Escolha entre: ação, aventura, terror, Fantasia. Lembre-se de escrever sem acentos e ç, e tudo minúsculo!');

    //imprimir após a verificação
    const whichGenry = entry.question('Informe o genero que voce quer encontrar: ').toLocaleLowerCase()
    console.log('Esses são os mangás disponíveis pelo gênero escolhido:');

    function category(livros) {
        return livros.categoria === whichGenry
    }

    const findlivros = livros.filter(category)
    console.table(findlivros);

    //vamos agorar recomendar mangás
    const recomendlivros = entry.question('Voce gostaria de ter a recomendacao de algum manga? (S/N): ').toLocaleUpperCase()
    console.log('Esses são os mangás que recomendamos:');

if(recomendlivros === 'S') {
    function recomendation(livros) {
        return livros.recomenda && livros.leu === true
    }

    const findRecomend = livros.filter(recomendation)
    console.table(findRecomend);
} else {
    console.log('Volte sempre ao meu arsenal!')
}
    const readManga = entry.question('Desejaria ver a minha lista de desejos? (S/N) ').toLocaleUpperCase()
    console.log('Aqui está a minha lista de mangás que quero ler:');

if(readManga === 'S'){

    function read(livros) {
        return livros.leu === false
    }

    const wishList = livros.filter(read)
    console.table(wishList);
} else {
    console.log('Volte sempre ao meu arsenal!')
}
} else if(takelivros === 'N'){
    console.log('Volte sempre ao meu arsenal!')
   
} else {
    console.log('Todas as opções que temos disponíveis:');
    console.table(livros);
}

