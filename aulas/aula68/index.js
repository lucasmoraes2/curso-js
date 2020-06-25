// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar valores
// -> Reduzir (somar tudo)

const numeros = [80, 50, 1 , 2, 3, 4, 8, 7, 11, 21, 27, 22];

const somaNumeros = numeros.filter(valor => valor % 2 === 0)
                            .map(valor => valor * 2)
                            .reduce((acumulador, valor) => acumulador + valor);
// Pares -> [ 80, 50, 2, 4, 8, 22 ]
// Dobro -> [ 160, 100, 4, 8, 16, 44 ]
// Soma de tudo -> 332
console.log(somaNumeros);

