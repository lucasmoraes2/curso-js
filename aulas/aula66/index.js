// Map - retorna outro array com os números modificados (caso desejemos), além disso, sempre retorna outro array com a
// mesma quantidade de elementos

// Dobre os números
//               0   1   2   3 ...
// const numeros = [80, 50, 1 , 2, 3, 4, 8, 7, 11, 21, 27, 22];
// const numerosEmDobro = numeros.map(valor =>  valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Aurora', idade: 23 },
    { nome: 'Lucas', idade: 60 },
    { nome: 'Tracy', idade: 35 },
    { nome: 'Caroline', idade: 23 },
    { nome: 'Joey', idade: 40 },
    { nome: 'Phoebe', idade: 52 },
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => obj.idade);
// const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

const pessoasComIds = pessoas.map((obj, indice) => {
    const novoObjeto = { ...obj }; // Criando um novo objeto para trabalhar com uma cópia dos objetos, e não o objeto original
    novoObjeto.id = (indice + 1) * 1000;
    return novoObjeto;
});
console.log(pessoasComIds);