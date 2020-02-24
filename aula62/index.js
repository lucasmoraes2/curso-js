// Valor por referência
//                 0         1        2       3         4        5          6        7        8
// const nomes = ['Eduardo', 'Maria', 'Nilce', 'Leon', 'Aurora', 'Tracy', 'Caroline', 'Ted', 'Phoebe'];
// const nomes = new Array('Eduardo', 'Maria', 'Nilce');
// const novo = nomes; // Tudo que fizer em novo reflete em nomes
// const novo = [...nomes]; // Copiando os dados do "nomes" para o "novo" 
// Strings, Objetos, Funções, Números
// nomes[2] = 'João';
// delete nomes[2];
// novo.pop(); // Remover último elemento
// console.log(nomes.length);
// nomes.shift(); // Remove o primeiro elemento e desloca as outras posições para frente
// nomes.push('Leon'); // Adicionando elemento no final
// nomes.unshift('Aurora'); // Adicionando elemento no início
// const novo = nomes.slice(4, 7); // "Fatiando" o array entre as posições 4 e 7, mas o índice 7 não é exibido
// console.log(novo);

const nome = 'Caroline Aksnes McConnell';
const nomes = nome.split(' '); // Separando a string usando um espaço como separador
console.log(nomes);
const nomes2 = [ 'Caroline', 'Aksnes', 'McConnell' ];
const nome2 = nomes2.join(' '); // Juntando o array e usando um espaço como ajuntador
console.log(nome2);