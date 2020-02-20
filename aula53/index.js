// Clojure
// function retornaFuncao() {
//     const nome = 'Leon';
//     return function() {
//         return nome;
//     };
// }

// const funcao = retornaFuncao();
// console.log(funcao); // console.dir(funcao) - somente no node

function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Nilce');
const funcao2 = retornaFuncao('Aurora');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());