// Função geradora
function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}

// const g1 = geradora1();
// // console.log(g1.next()); // Mostrando o primeiro yield
// // console.log(g1.next().value); // Valor 1
// // console.log(g1.next().value); // Valor 2
// // console.log(g1.next().value); // Valor 3
// for (let valor of g1) {
//     console.log(valor); // Valor 1, Valor 2, Valor 3
// }

function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // Deleguei a função geradora3 para a geradora4
    yield 3;
    yield 4;
    yield 5;
}

// const g4 = geradora4();
// for (let valor of g4) {
//     console.log(valor);
// }

function* geradora5() {
    yield function() {
        console.log('Vim do yield1');
    };

    return function() { // A função irá parar no return
        console.log('Vim do return');
    };

    // Código qualquer ...

    yield function() {
        console.log('Vim do yield2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();