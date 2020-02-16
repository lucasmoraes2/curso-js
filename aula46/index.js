// setInterval - Executa infinitamente depois durante um intervalo especificado
// setTimeout - Executa uma vez depois de um intervalo especificado

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function funcaoDoInterval() {
//     console.log(mostraHora());
// }
// setInterval(funcaoDoInterval, 1000);

// setInterval(function() {
//     console.log(mostraHora());
// }, 1000);

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá mundo');
}, 5000);

