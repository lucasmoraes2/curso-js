// Herança

// Produto -> aumento, desconto
// Camiseta (cor), caneca (material, estoque)

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
// Antes de linkar (linha abaixo) -> Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) { // Alterando o comportamento do aumento
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Generico', 111);
const camiseta = new Camiseta('Friends', 20, 'Branca');
const caneca = new Caneca('How I Met Your Mother', 20, 'Vidro', 4);
// camiseta.aumento(10);
console.log(produto);
console.log(camiseta);
console.log(caneca);
caneca.estoque = 10; // Usando set
console.log('Estoque = ' + caneca.estoque) // Usando get