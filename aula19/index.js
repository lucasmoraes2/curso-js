/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
 * 
 * Referência (mutável) - array, object, function - Passados por referência
 */

//          0123
// let nome = 'Luiz';
// nome[0] = 'R';
// console.log(nome[0], nome);

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

// let a = [1, 2, 3];
// let b = a; // b = [...a] => Cópia // Passado por referência, apontam para o mesmo espaço na memória
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = a; // const b = {...a}; => Cópia, não apontam para o mesmo espaço na memória

a.nome = 'João';
console.log(b);