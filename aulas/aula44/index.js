// Try, catch e throw

// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('naoExisto não existe.');
//     console.log(err); // Não fazer isso
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        //throw('x e y precisam ser números.');
        // throw new Error('x e y precisam ser números.');
        throw new ReferenceError('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    // console.log(error); // Não fazer isso no front-end
    console.log('Alguma coisa mais amigável para o usuário');
}