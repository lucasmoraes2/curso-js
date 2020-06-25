// Fun��es de callback

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function funcao1(callback) {
    setTimeout(function() { // fun��o de callback
        console.log('fun��o 1');
        if (callback) callback();
    }, rand());
}

function funcao2(callback) {
    setTimeout(function() { // fun��o de callback
        console.log('fun��o 2');
        if (callback) callback();
    }, rand());
}

function funcao3(callback) {
    setTimeout(function() { // fun��o de callback
        console.log('fun��o 3');
        if (callback) callback();
    }, rand());
}

// funcao1(function() {
//     funcao2(function() {
//         funcao3(function() {
//             console.log('Ol� mundo!');
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
    console.log('Ol� mundo!');
}

