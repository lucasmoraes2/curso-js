// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe) - todas
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// function executaFuncao(funcao) {
//     console.log('Vou executa sua função abaixo:');
//     funcao();
// }
// executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() { // falar: function() {
        console.log('Estou falando...');
    }
};

obj.falar();