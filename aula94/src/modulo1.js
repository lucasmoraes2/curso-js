// export const nome = 'Aurora';
// export const sobrenome = 'Aksnes';
// export const idade = 23;

const nome = 'Aurora';
const sobrenome = 'Aksnes';
const idade = 23;

function soma(x, y) {
    return x + y;
}

// export default function soma2(x, y) {
//     return x + y;
// }

// export { nome, sobrenome, idade, soma };
// export { nome as nome2, sobrenome, idade, soma };

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma };

// export { nome as default, sobrenome, idade, soma };