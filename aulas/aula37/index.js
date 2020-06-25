//            0123456...
// const nome = 'Ted McConnell';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

// for (let valor of nome) {
//     console.log(valor); // == console.log(nome[i])
// }

const nomes = ['Aurora', 'Aksnes'];

console.log('------- For -------');

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('------- For in -------');

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('------- For of -------');

for (let valor of nomes) {
    console.log(valor); // == console.log(nome[i])
}

console.log('------- Foreach -------');

nomes.forEach(function(valor, indice, arrayCompleto) {
    console.log(valor, indice, arrayCompleto);
});

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Moraes'
};

// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o ìndice ou chave (strings, arrays ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

for (chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// for (valor of pessoa) {} // Não funciona