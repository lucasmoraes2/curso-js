/**
 * Entre 0 - 11  - Bom dia
 * Entre 12 - 18 - Boa tarde
 * Entre 19 - 23 - Boa noite
 */

// If pode ser usado sozinho
// Else e ElseIf precisa de um If antes
// Pode ter vários ElseIf na checagem
// Só pode ter um Else na checagem
// Pode-se usar condições sem ElseIf

// const hora = 10;
const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia.');
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde.');
} else if (hora >= 19 && hora <= 23) {
    console.log('Boa noite.');
} else {
    console.log('Olá');
}

const tenhoDinheiro = true; // 'Vou sair de casa.'
// const tenhoDinheiro = NaN; // 'Não vou sair de casa.'

if (tenhoDinheiro) {
    console.log('Vou sair de casa.');
} else {
    console.log('Não vou sair de casa.')
}