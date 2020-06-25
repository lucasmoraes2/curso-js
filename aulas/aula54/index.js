// Funções de callback

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function funcao1(callback) {
    setTimeout(function() { // função de callback
        console.log('função 1');
        if (callback) callback();
    }, rand());
}

function funcao2(callback) {
    setTimeout(function() { // função de callback
        console.log('função 2');
        if (callback) callback();
    }, rand());
}

function funcao3(callback) {
    setTimeout(function() { // função de callback
        console.log('função 3');
        if (callback) callback();
    }, rand());
}

// funcao1(function() {
//     funcao2(function() {
//         funcao3(function() {
//             console.log('Olá mundo!');
//         });
//     });
// });

funcao1(funcao1Callback);

function funcao1Callback() {
    funcao2(funcao2Callback);
}

function funcao2Callback() {
    funcao3(funcao3Callback);
}

function funcao3Callback() {
    console.log('Olá mundo!');
}

