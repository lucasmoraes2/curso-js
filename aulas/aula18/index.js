/* const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Moraes',
    idade: 23
};

console.log(pessoa1.nome); */

/* function criaPessoa(nome, sobrenome, idade) {

    return {
        nome,       // nome: nome
        sobrenome,  // sobrenome: sobrenome
        idade       // idade: idade
    }
}

const pessoa1 = criaPessoa('Lucas', 'Moraes', 25);
const pessoa2 = criaPessoa('Mariana', 'McConnell', 25);
const pessoa3 = criaPessoa('João', 'Mosby', 30);
const pessoa4 = criaPessoa('Caroline', 'Bressan', 22);
const pessoa5 = criaPessoa('Luiza', 'Soares', 28);

console.log(pessoa1.nome, pessoa4.nome); */

const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Moraes',
    idade: 27,

    fala() {
        //console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();