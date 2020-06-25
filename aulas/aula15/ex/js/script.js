/*var numero = prompt('Digite um número:');
numero = Number(numero);

document.body.innerHTML += `<h1>O seu número é ${numero}</h1>`;
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)}<br/><br/>`;
document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br/><br/>`;
document.body.innerHTML += `É NaN: ${Number.isNaN(numero)}<br/><br/>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br/><br/>`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br/><br/>`;
document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br/><br/>`;*/

const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}.</p>`; // ${numero ** 0.5}
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;