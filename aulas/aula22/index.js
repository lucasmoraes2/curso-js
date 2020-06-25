/**
 * Operadores lógicos
 * && -> AND -> E   -> Todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR  -> OU  -> Pelo menos uma das expressões precisam ser verdadeira para retornar true
 * !  -> NOT -> NÃO -> Inverte o valor retornado, se for 'true' retorna 'false'
*/

const expressaoAnd = true && true && true;
console.log(expressaoAnd); // true

const expressaoOr = false || true || false || false;
console.log(expressaoOr); // true

const expressaoNot = !false;
console.log(expressaoNot); //true

const usuario = 'Lucas'; // usuário digitou no form
const senha = '123456';  // usuário digitou no form

//                      true                 true
const vaiLogar = usuario === 'Lucas' && senha === '123456';
console.log(vaiLogar);
