// Escopo léxico - busca a variável no escopo dela, depois no pai dela, e assim por diante...

const nome = 'Lucas';

function falaNome() {
    // const nome = 'Joey'; // Vai ser exibido Joey
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Phoebe'; // Não vai ser utilizada
    falaNome();
}

falaNome();