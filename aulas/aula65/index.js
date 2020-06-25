// Filter, map, reduce
// Filter -> sempre retorna um novo array, com a mesma quantidade ou menos de elementos

// Retorne os números maiores que 10
//               0   1   2   3 ...
// const numeros = [80, 50, 1 , 2, 3, 4, 8, 7, 11, 21, 27, 22];

// function callbackFilter(valor) { // podemos receber o índice e o array inteiro -> function callbackFilter(valor, indice, array)
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilter);

// const numerosFiltrados = numeros.filter(valor => valor > 10);

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });

// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termine com a
const pessoas = [
    { nome: 'Aurora', idade: 23 },
    { nome: 'Lucas', idade: 60 },
    { nome: 'Tracy', idade: 35 },
    { nome: 'Caroline', idade: 23 },
    { nome: 'Joey', idade: 40 },
    { nome: 'Phoebe', idade: 52 },
];

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasIdadeMaior50 = pessoas.filter(valor => valor.idade > 50);
console.log(pessoasIdadeMaior50);

const pessoasNomeTerminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeTerminaComA);