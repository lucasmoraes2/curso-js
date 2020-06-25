// Atribuição via desestruturação

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

//                0    1    2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const primeiroNumero = numeros[0];

// ... rest (pegar o resto), ... spread (espalhar/distribuir)
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero); // primeiroNumero = 100 e segundoNumero = 200
console.log(resto); // array com o restante -> [ 300, 400, 500, 600, 700, 800, 900 ]

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete); // 100 300 500 700

//                  0          1          2
//               0  1  2    0  1  2    0  1  2
const lista = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = lista;
console.log(seis);