// Classes

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    // comer() {
    //     console.log(`${this.nome} está comendo.`);
    // }

    // beber() {
    //     console.log(`${this.nome} está bebendo.`);
    // }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}

const p1 = new Pessoa('Caroline', 'Aksnes');
const p2 = new Pessoa('Caroline', 'Aksnes');
// const p2 = new Pessoa('Nilce', 'Leon');
// const p3 = new Pessoa('Lucas', 'Aksnes');
// const p4 = new Pessoa('Aurora', 'McConnell');
console.log(p1);
console.log(p2);