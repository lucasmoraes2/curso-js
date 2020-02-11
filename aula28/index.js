// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString());
const data = new Date(2019, 4, 16, 21, 59, 59, 999); // ano, mês, dia, horas, minutos, segundos, milissegundos
const data2 = new Date(2019, 4, 16, 22);
const data3 = new Date('2020-02-11 23:45:59'); // new Date('2020-02-11T23:45:59.999');
console.log(data.toString());
console.log(data2.toString());
console.log(data3.toString());