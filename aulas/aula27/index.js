/**
 * Operador ternário
 * (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
 */

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao); // retorna Preta