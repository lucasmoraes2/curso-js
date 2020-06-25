const verdadeira = true;

// Let possui escopo de bloco { ...bloco }
// Var só tem escopo de função

let nome = 'Lucas'; // criando
var nome2 = 'João'; // criando
var nome2 = 'Ana'; // redeclarando

if (verdadeira) {
  let nome = 'Júlia'; // criando

  if (verdadeira) {
    var nome2 = 'Pedro'; // redeclarando
    let nome = 'Outro nome'; // criando
  }
}

console.log(nome, nome2);

var sobrenome = 'Bressan';

function falaOi() {
  var nome3 = 'Caroline';
  console.log(sobrenome);
}

// console.log(nome3); // Variável 'nome3' foi definida dentro da função, ou seja, acessamos apenas dentro da função
falaOi();

console.log(sobrenome1); // Retorna -> undefined
var sobrenome1 = 'Mosby';

console.log(sobrenome2); // sobrenome2 is not defined
let sobrenome2 = 'Aksnes';
