// Quando a função é criada com "function" existe uma variável arguments com todos argumentos enviados
// function funcao() {
//   console.log('Oie');
//   console.log(arguments); // Objeto com todos parâmetros enviados
//   console.log(arguments[0]);
// }
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function funcao(a, b, c) { // a = 1, b = 2, c = 3, arguments (contém todos os argumentos enviados) = { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 }
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b = 2, c = 4) {
//   // b = b || 2;
//   console.log(a + b + c);
// }
// funcao(2,undefined,20); // passando apenas os valores de a e c

// function funcao({nome, sobrenome, idade}) {
//   console.log(nome, sobrenome, idade);
// }
// let obj = {nome: 'Lucas', sobrenome: 'Aksnes', idade:35};
// funcao(obj);

// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3);
// }
// funcao(['Caroline', 'McConnell', 22]);

// function conta(operador, acumulador, ...numeros) {
//   // console.log(operador, acumulador, numeros);
//   for (let numero of numeros) {
//     if (operador === '+') acumulador += numero;
//     if (operador === '-') acumulador -= numero;
//     if (operador === '*') acumulador *= numero;
//     if (operador === '/') acumulador /= numero;
//   }
//   console.log(acumulador);
// }

// const conta = (operador, acumulador, ...numeros) => {
//   // console.log(arguments); // não existe
//   console.log(operador, acumulador, numeros);
// }

const conta = (...args) => {
  console.log(args); // console.log(arguments);
}


conta('+', 0, 20, 30, 40, 50);
