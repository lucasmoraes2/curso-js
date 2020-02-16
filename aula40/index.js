// continue continua para a próxima iteração
// break sai do laço
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('------- For of -------');
for (let numero of numeros) {
    
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // Pulando para a próxima iteração
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Achei o número 7, saindo do laço');
        break; // Termina o laço
    }

}

console.log('------- For in -------');
for (let i in numeros) {
    let numero = numeros[i];
    
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // Pulando para a próxima iteração
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Achei o número 7, saindo do laço');
        break; // Termina o laço
    }

}

console.log('------- For clássico -------');
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // Pulando para a próxima iteração
    }

    console.log(numero);// For clássico

    if (numero === 7) {
        console.log('Achei o número 7, saindo do laço');
        break; // Termina o laço
    }

}

console.log('------- While -------');
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue; // Pulando para a próxima iteração
    }

    console.log(numero);// For clássico

    if (numero === 7) {
        console.log('Achei o número 7, saindo do laço');
        i++;
        break; // Termina o laço
    }

    i++;

}

console.log('------- Do While -------');
i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue; // Pulando para a próxima iteração
    }

    console.log(numero);// For clássico

    if (numero === 7) {
        console.log('Achei o número 7, saindo do laço');
        i++;
        break; // Termina o laço
    }

    i++;

} while (i < numeros.length);