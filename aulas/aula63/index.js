//               -8       -7       -6        -5      -4        -3      -2         -1
//                0        1        2         3       4         5       6          7
const nomes = ['Maria', 'João', 'Eduardo', 'Júlia', 'Leon', 'Aurora', 'Joey', 'Jout Jout'];

// nomes.splice(índice, delete, elemento1, elemento2, elemento3..);

// const removidos = nomes.splice(6, 2);
// console.log(nomes, removidos); // [ 'Maria', 'João', 'Eduardo', 'Júlia', 'Leon', 'Aurora' ] [ 'Joey', 'Jout Jout' ]

// const removidos = nomes.splice(-1, 1); // Quando se utiliza o negativo funciona assim: array.length -1
// console.log(nomes, removidos); // [ 'Maria', 'João', 'Eduardo', 'Júlia', 'Leon', 'Aurora', 'Joey' ] [ 'Jout Jout' ] 

// const removidos2 = nomes.splice(-2, 1); // Quando se utiliza o negativo funciona assim: array.length -2
// console.log(nomes, removidos2); // [ 'Maria', 'João', 'Eduardo', 'Júlia', 'Leon', 'Aurora', 'Jout Jout' ] [ 'Joey' ]

// const removidos = nomes.splice(-4, Number.MAX_VALUE); // Number.MAX_VALUE -> maior número que pode ter no JS (utilizado aqui para não passar um número absurdo)
// console.log(nomes, removidos); // Removido da posição -4 até o final do array [ 'Maria', 'João', 'Eduardo', 'Júlia' ] [ 'Leon', 'Aurora', 'Joey', 'Jout Jout' ]

// const removidos = nomes.splice(3, 0, 'Ted'); // Adicionando o 'Ted' no índice 3 e remove ninguém
// console.log(nomes, removidos);

// pop
// const removidos = nomes.splice(-1, 1); // Remove o último elemento

// shift
// const removidos = nomes.splice(0, 1); // Remove o primeiro elemento 

// push
// nomes.splice(nomes.length, 0, 'Lucas'); // Adiciona no final do array

// unshift
// nomes.shift(0, 0, 'Lucas'); // Adiciona no começo do array

console.log(nomes);