// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// for (let i = 0; i <= 5; i++) {
//   console.log(`Linha ${i}`);
// }
//
// for (let i = 500; i >= 400; i-=10) {
//   console.log(`Linha ${i}`);
// }

for (let i = 0; i <= 10; i++) {
  const parOuImpar = i % 2 === 0 ? 'par' : 'ímpar';
  console.log(`${i} - ${parOuImpar}`);
}

//               0       1       2        3          4          5          6
const frutas= ['Maçã', 'Pêra', 'Uva', 'Abacaxi', 'Morango', 'Laranja', 'Banana'];

for (let i = 0; i < frutas.length; i++) { // frutas.length = 5
  console.log(`Índice ${i} - ${frutas[i]}`);
}
