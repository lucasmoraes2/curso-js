// forEach (apenas em arrays)

const array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// for(let valor of array1) {
//     console.log(valor);
// }

// array1.forEach(function(valor, indice, array) {
//     // console.log(valor, indice, array);
//     console.log(valor);
// });

let total = 0;
array1.forEach(valor => total += valor);
console.log(total);