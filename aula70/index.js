// Objetos

// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Moraes'
// };

// console.log(pessoa.nome); // pessoa['nome']
// console.log(pessoa.sobrenome); // pessoa['sobrenome']

// const chave = 'nome';
// console.log(pessoa[chave]);
// console.log(pessoa['nome']);

// const pessoa = new Object();
// pessoa.nome = 'Lucas';
// pessoa.sobrenome = 'Moraes';
// pessoa.idade = 30;
// pessoa.falarNome = function() {
//     return (`${this.nome} está falando oi.`);
// };

// console.log(pessoa); // { nome: 'Lucas', sobrenome: 'Moraes' }

// delete pessoa.nome;
// console.log(pessoa); // { sobrenome: 'Moraes' }

// console.log(pessoa.falarNome()); // Lucas está falando oi.

// pessoa.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// console.log(pessoa.getDataNascimento());

// for (let chave in pessoa) {
//     // console.log(chave);
//     console.log(pessoa[chave]);
// }

// Factory functions / Constructor functions / Classes

// Factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

// const p1 = criaPessoa('Lucas', 'Moraes');
// console.log(p1.nomeCompleto); // sem a palavra get -> p1.nomeCompleto()

// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // return this; // Implícito

    // Object.freeze(this); // Não conseguimos alterar e nem criar métodos ou atributos nesse objeto
}

// {} <- this (atrela this a esse objeto) -> this (retorna this)
// const p1 = new Pessoa('Lucas', 'Moraes');
// const p2 = new Pessoa('Aurora', 'Aksnes');
// console.log(p1); // Pessoa { nome: 'Lucas', sobrenome: 'Moraes' }

// p1 = (ENDERECOMEMORIA) -> 'Valor'
// p1 = (NOVOENDERECOMEMORIA) -> 'Valor' // Não posso apontar para um novo endereço de memória, apenas alterar o valor que esse endereço aponta
const p1 = new Pessoa('Lucas', 'Aksnes');
// Object.freeze(p1); // Não posso alterar, ou seja, a linha de baixo não irá afetar essa constante
p1.nome = 'Caroline';
console.log(p1);