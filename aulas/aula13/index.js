let umaString = "Um \"texto\"";
console.log(umaString);

let umaString1 = "Um \\texto";
console.log(umaString1);

//                0123456789
let umaString2 = "Um texto em um lindo.";
console.log(umaString2[4]);
console.log(umaString2.charAt(4));
console.log(umaString2.charCodeAt(6)); // tabela ASCII
console.log(umaString2.concat(` dia.`)); // console.log(`${umaString2} em um lindo dia.`)
console.log(umaString2.indexOf('texto')); // saber em qual índice começa a palavra
console.log(umaString2.lastIndexOf('texto')); // começa de trás para frente lastIndexOf('t', 4);
console.log(umaString2.match(/[a-z]/g));
console.log(umaString2.search(/[a-z]/g)); // Encontrando a primeira letra minúscula
console.log(umaString2.replace('Um', 'Outro'));
console.log(umaString2.length);
console.log(umaString2.slice(3, 8)); // Pegando a palavra 'texto'
console.log(umaString2.slice(-6, -1)); // Pegando a palavra 'lindo'
console.log(umaString2.substring(umaString2.length - 6, umaString2.length - 1));
console.log(umaString2.split(' '));
console.log(umaString2.toUpperCase());
console.log(umaString2.toLowerCase());