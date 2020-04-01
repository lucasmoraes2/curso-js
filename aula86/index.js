function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function espera(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof mensagem !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(mensagem);
        }, tempo);
    });
}

espera('Conexão com DB.', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return espera('Buscando dados da BASE.', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return espera('Tratando dados da BASE.', rand(1, 3));
        // return espera(1234, rand(1, 3)); // ERRO
        // return resposta + ' vai para o outro then';
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela.');
    })
    .catch((e) => {
        console.log('ERRO:', e);
    });

console.log('Isso será exibido antes de qualquer promisse.');