const numero = 10;

// Se (numero >= 0 &&  numero <= 5) ocorrer, faça isso {código}
// Se não faça isso {código}

// if (numero >= 0 && numero <= 5) {
//     console.log('O número está entre 0 e 5.');
// } else {
//     console.log('O número não está entre 0 e 5.');
// }

if (numero < 11) { // Verdadeiro
    console.log('O número é menor que 11.');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.'); 
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} /*else if (1 === 1) {
    console.log('LITERAL'); // Verdadeiro
}*/ else if (numero >= 9 && numero <= 11) { // Verdadeiro
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

console.log('... aqui vem o restante do código.');