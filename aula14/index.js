// Padrão de precisão de casas decimais IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

// num1 = num1.toFixed(2); // falso 1.00
num1 = Number(num1.toFixed(2)); // verdadeiro 1.00

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2)); // Binário
// console.log(num1.toFixed(2)); // Arredondamento com 2 casas decimais
// console.log(Number.isInteger(num1)); // Verificando se o número é inteiro
