// Função construtora -> objetos
// Função fábrica -> objetos
// Fábrica -> criaPessoa
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) { // convenção começar com letra maiúscula
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {};

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Aurora', 'Aksnes');
const p2 = new Pessoa('Caroline', 'Bressan');
p1.metodo();

// console.log(p1.nome); // Aurora