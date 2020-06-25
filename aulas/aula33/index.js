const pessoa = {
  nome: 'Aurora',
  sobrenome: 'Aksnes',
  idade: 23,
  endereco: {
      rua: 'Av. São Paulo',
      numero: 123
  }
}

// Atribuição via desestruturação (objetos)
// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade); // Aurora Aksnes 23

// const { nome: teste = '', sobrenome } = pessoa;
// console.log(teste, sobrenome); // Aurora Aksnes

// const { endereco: { rua, numero }, endereco } = pessoa;
// console.log(`${rua}, ${numero}`); // Av. São Paulo, 123
// console.log(endereco); // { rua: 'Av. São Paulo', numero: 123 }

// const { endereco: { rua: r = 12345, numero } } = pessoa; // Definindo apelido de 'r' para a rua e um valor padrão de '12345' caso não tenha a rua
// console.log(r, numero); // Av. São Paulo 123

const { nome, ...resto } = pessoa;
console.log(nome, resto); // Aurora { sobrenome: 'Aksnes', idade: 23, endereco: { rua: 'Av. São Paulo', numero: 123 } }
console.log(resto.sobrenome); // Aksnes
