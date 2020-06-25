/**
 * Short-Circuit
 * && -> false && true -> retorna o valor que corresponde a 'false' ----------- true && true && 'Maria' -> retorna o último valor (Maria)
 * || -> true || false -> vai retornar "o valor verdadeiro"
 * FALSY (considerados como false quando necessário):
 * - 0
 * - '' "" ``
 * - null / undefined
 * - NaN
 */

console.log(true && 'Maria' && 0 && '123'); // retorna 0, pois é considerado como false

console.log('Luiz' && NaN && 'Mariana'); // retorna NaN

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());  // return false

const vaiExecutarNovamente = undefined;
console.log(vaiExecutarNovamente && falaOi()); // return undefined

console.log( 0 || false || null || 'Lucas' || true); // retorna o primeiro valor verdadeiro (Lucas)

const corUsuario = null;
const corPadrao = 'preto';

console.log(corUsuario || corPadrao); // null é considerado como false, por isso, retorna preto

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // retorna a string 'false'
