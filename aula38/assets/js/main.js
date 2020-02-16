const divParagrafos = document.querySelector('.paragrafos');
const paragrafos = divParagrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // Pegando a cor de fundo do elemento 'body'
const backgroundColorBody = estilosBody.backgroundColor;

for (let paragrafo of paragrafos) {
    paragrafo.style.backgroundColor = backgroundColorBody;
    paragrafo.style.color = '#FFFFFF';
    // console.log(paragrafo);
}