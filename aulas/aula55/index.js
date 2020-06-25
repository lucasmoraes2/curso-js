// IIFE -> Immediately invoked function expression

// function qualquerCoisa() {
//     console.log(11223344);
// }
// qualquerCoisa();

(function(idade, peso, altura) { // Não tem relação com o escopo global
    // console.log(11223344);
    // const nome = 'Lucas';
    // console.log(nome);

    const sobrenome = 'Aksnes';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Lucas'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(23, 55, 1.60);

const nome = 'Aurora';
console.log(nome);