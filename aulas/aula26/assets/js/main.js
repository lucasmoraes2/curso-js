const form = document.querySelector('#form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classificacaoImc = getClassificacaoImc(imc);
    const mensagem = `Seu IMC é ${imc} (${classificacaoImc}).`;
    setResultado(mensagem, true);
});

function getClassificacaoImc(imc) {
    const classificacao = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc > 39.9) return classificacao[5];
    
    if (imc > 34.9) return classificacao[4];
    
    if (imc > 29.9) return classificacao[3];
    
    if (imc > 24.9) return classificacao[2];
    
    if (imc > 18.5) return classificacao[1];
    
    if (imc < 18.5) return classificacao[0];

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarParagrafo() {
    return document.createElement('p');;
}

function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#resultado');
    //resultado.innerHTML = `<p>${mensagem}</p>`;
    resultado.innerHTML = '';

    const paragrafo = criarParagrafo();

    if(isValid) {
        paragrafo.classList.add('paragrafo-sucesso');
    } else {
        paragrafo.classList.add('paragrafo-falha');
    }

    paragrafo.innerHTML = mensagem;
    resultado.appendChild(paragrafo);
}

const pesoElement = document.querySelector('#peso');
const alturaElement = document.querySelector('#altura');
const buttonElement = document.querySelector('form button');