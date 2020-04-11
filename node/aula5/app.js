const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: 'Lucas'},
//     {nome: 'Aurora'},
//     {nome: 'Tracy'},
//     {nome: 'Ted'},
//     {nome: 'Caroline'},
//     {nome: 'Phoebe'},
//     {nome: 'Nilce'}
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escrever(caminhoArquivo, json);

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(valor => console.log(valor.nome));
}

lerArquivo(caminhoArquivo);

