// Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Permissão para que mostre a chave (estoque) quando chamarmos o objeto
        configurable: true, // Permissão para ser configurável
        get: function() {
            return estoque;
        },
        set: function(valor) {
            // estoquePrivado = valor;
            if (typeof valor !== 'number') {
                // console.log('Bad value');
                // return;
                throw new TypeError('Mensagem');
            }
            estoque = valor;
        }
    });

}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// p1.estoque = 'O valor que eu quero';
// p1.estoque = 500;
// console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);