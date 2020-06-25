// For in -> lê os índices do array ou chaves do objeto
//                0       1        2        3
const frutas = ['Maçã', 'Uva', 'Abacaxi', 'Pera'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for (let indice in frutas) {
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Tracy',
    sobrenome: 'Aksnes',
    idade: 35
};

// console.log(pessoa.nome); // Tracy
// console.log(pessoa['nome']); // Tracy

for (let chave in pessoa) {
    // console.log(chave); // nome, sobrenome, idade
    console.log(chave, pessoa[chave]); // nome Tracy, sobrenome Aksnes, idade 35
}