/**
 * Aritméticos
 * + Adição / Concatenação
 * - Subtração
 * / Duvisão
 * * Multiplicação
 * ** Potenciação
 * % Módulo (Resto da divisão)
 */

 const num1 = 10;
 const num2 = 5;
 console.log(num1 + num2);

 /**
  * Precedência
  * ()
  * *
  * / %
  * + -
  */

/**
 * Operadores de atribuição
 * Incremento => ++
 * Decremento => --
 */

let contador = 2;
contador += 2; // contador = contador + 2
contador += 2;
contador += 2;
console.log(contador);

// NaN - Not a Number | parseInt (inteiro) | parseFloat (decimais)
const numero1 = 10;
const numero2 = 'L4'; // NaN
const numero3 = parseInt('4'); // Number('4.0')
console.log(typeof numero3);
console.log(numero1 + numero3);