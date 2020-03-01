// Herança

// Produto -> aumento, desconto
// Camiseta (cor), caneca (material)

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
}

const camiseta = new Camiseta('Friends', 20, 'Branca');
camiseta.aumento(10);
console.log(camiseta);