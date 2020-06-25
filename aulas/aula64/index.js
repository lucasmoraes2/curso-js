// Concatenação de arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// const array3 = array1.concat(array2);
// console.log(array3); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(typeof array3);
// const array3 = array1.concat(array2, [7, 8, 9], 'Lucas'); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Lucas' ]

// ... rest -> spread (espalhar array)

// const array3 = [...array1, ...array2];
// console.log(array3); // [ 1, 2, 3, 4, 5, 6 ]

const array3 = [...array1, 'Lucas', ...array2, ...[7, 8, 9]];
console.log(array3); // [ 1, 2, 3, 'Lucas', 4, 5, 6, 7, 8, 9 ]