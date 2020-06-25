// defineProperty() - defineProperties()

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Permissão para que mostre a chave (estoque) quando chamarmos o objeto
        value: estoque, // Permissão para mostrar o valor
        writable: false, // Permissão para alterar o valor
        configurable: true // Permissão para ser configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: false, // pode alterar
            configurable: true // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false, // pode alterar
            configurable: true // configurável
        },
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));