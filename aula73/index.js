/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnerPropertyDescriptor(o, 'prop')
 * ... (spread)
 * 
 * // Já vimos
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

// const caneca = { nome: 'Caneca', preco: 40 };
// const produto = { nome: caneca.nome, preco: caneca.preco }; // Cópia de caneca
// const produto = Object.assign({}, caneca, { material: 'bambu' }); // Cópia de caneca e adicionando atributo
// const produto = { ...caneca, material: 'bambu' }; // Cópia de caneca e adicionando atributo
// const outraCoisa = produto; // Aponta para o mesmo local da memória

// produto.nome = 'Talheres';
// produto.preco = 20;
// // caneca.nome = 'Guarda chuva amarelo';
// console.log(caneca);
// console.log(produto);

// const produto = { nome: 'Produto', preco: 40 };
// Object.freeze(produto);
// produto.nome = 'Outro nome'; // Com a linha de cima não irá funcionar
// const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto));

const produto = { nome: 'Produto', preco: 40 };

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Mostra as configurações da propriedades do objeto
// { value: 'Produto', writable: true, enumerable: true, configurable: true }

// console.log(Object.values(produto)); // Retorna só os valores do objeto -> [ 'Produto', 40 ]
// console.log(Object.entries(produto)); // Retorna as  chaves e os valores do objeto -> [ [ 'nome', 'Produto' ], [ 'preco', 40 ] ]

for (let entry of Object.entries(produto)) {
    console.log(entry);
    // [ 'nome', 'Produto' ] 
    // [ 'preco', 40 ]
}

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
    // nome Produto
    // preco 40
}