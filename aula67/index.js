// Reduce

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

//               0   1   2   3 ...
const numeros = [80, 50, 1 , 2, 3, 4, 8, 7, 11, 21, 27, 22];

// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor;
//     // console.log(acumulador, valor);
//     return acumulador;
// }, 0); // valor inicial para o acumulador (opcional). Se não colocar ele assume o valor inicial com o valor do primeiro elemento
// console.log(total);

// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if (valor % 2 === 0) acumulador.push(valor); // números pares
//     // if (valor % 2 !== 0) acumulador.push(valor); // números ímpares
//     return acumulador;
// }, []);
// console.log(total);

// const total = numeros.reduce(function(acumulador, valor) {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);
// console.log(total);

// const total = numeros.reduce(function(acumulador, valor) {
//     if (valor % 2 === 0) acumulador += valor;
//     return acumulador;
// }, 0);
// console.log(total);

// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Aurora', idade: 23 },
    { nome: 'Lucas', idade: 60 },
    { nome: 'Tracy', idade: 35 },
    { nome: 'Caroline', idade: 23 },
    { nome: 'Joey', idade: 40 },
    { nome: 'Phoebe', idade: 52 },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => { // acumulador = primeiro elemento e valor = segundo elemento
    if (acumulador.idade > valor.idade) return acumulador;
    return valor; 
});

console.log(pessoaMaisVelha); // { nome: 'Lucas', idade: 60 }