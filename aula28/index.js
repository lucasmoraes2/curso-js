// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString());

const data = new Date(2019, 4, 16, 21, 59, 59, 999); // ano, mês, dia, horas, minutos, segundos, milissegundos
const data2 = new Date(2019, 4, 16, 22);
const data3 = new Date('2020-02-11 23:45:59.999'); // new Date('2020-02-11T23:45:59.999');
console.log(data.toString());
console.log(data2.toString());
console.log(data3.toString());

console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() + 1); // Mẽs começa do zero
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay()); // 0 - Domingo, 6 - Sábado
console.log(Date.now()); // Milissegundos

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataAtual = new Date();
const dataBrasil = formataData(dataAtual);
console.log(dataBrasil);