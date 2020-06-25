function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof mensagem !== 'string') {
                reject('ERRO');
                return;
            }

            resolve(mensagem.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

/**
 * Promise.all     -> Tenta resolver todas, mas se uma der errado, rejeita todas
 * Promise.race    -> Tenta resolver uma a uma, e entrega a primeira que resolver (ou rejeitar, caso a primeira que cair seja o erro)
 * Promise.resolve -> Caso já tenha uma promise, não precisa esperar e já entrega
 * Promise.reject  -> Já cai no catch
 */

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        // return Promise.resolve('Página em cache');
        return Promise.reject('Página em cache');
    } else {
        return espera('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('Erro', e));

// const promises = [
//     // 'Primeiro valor',
//     espera('Promise 1', rand(1, 5)),
//     espera('Promise 2', rand(1, 5)),
//     espera('Promise 3', rand(1, 5)),
//     espera(1000, 1000), // Erro
//     // 'Outro valor'
// ];

// Promise.race(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     });

// Promise.all(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     });