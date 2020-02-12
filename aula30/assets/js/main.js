// MANEIRA 1

// function getDiaSemanaTexto (diaSemana) {
//   let diaSemanaTexto;
//
//   switch (diaSemana) {
//     case 0:
//     diaSemanaTexto = 'Domingo';
//     return diaSemanaTexto;
//     case 1:
//     diaSemanaTexto = 'Segunda-feira';
//     return diaSemanaTexto;
//     case 2:
//     diaSemanaTexto = 'Terça-feira';
//     return diaSemanaTexto;
//     case 3:
//     diaSemanaTexto = 'Quarta-feira';
//     return diaSemanaTexto;
//     case 4:
//     diaSemanaTexto = 'Quinta-feira';
//     return diaSemanaTexto;
//     case 5:
//     diaSemanaTexto = 'Sexta-feira';
//     return diaSemanaTexto;
//     case 6:
//     diaSemanaTexto = 'Sábado-feira';
//     return diaSemanaTexto;
//     default:
//     diaSemanaTexto = '';
//     return diaSemanaTexto;
//   }
// }
//
// function getNomeMes (mes) {
//   let mesTexto;
//
//   switch (mes) {
//     case 0:
//       return mesTexto = 'Janeiro';
//     case 1:
//       return mesTexto = 'Fevereiro';
//     case 2:
//       return mesTexto = 'Março';
//     case 3:
//       return mesTexto = 'Abril';
//     case 4:
//       return mesTexto = 'Maio';
//     case 5:
//       return mesTexto = 'Junho';
//     case 6:
//       return mesTexto = 'Julho';
//     case 7:
//       return mesTexto = 'Agosto';
//     case 8:
//       return mesTexto = 'Setembro';
//     case 9:
//       return mesTexto = 'Outubro';
//     case 10:
//       return mesTexto = 'Novembro';
//     case 11:
//       return mesTexto = 'Dezembro';
//     default:
//       return mesTexto = '';
//   }
// }
//
// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }
//
// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();
//
//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);
//
//   return (`${nomeDia}, ${data.getDay()} de ${nomeMes} de ${data.getFullYear()} <br/> ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
// }
//
// const data = new Date();
//
// const texto = document.querySelector('.container h1');
// texto.innerHTML = criaData(data);

// MANEIRA 2

const texto = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
};

texto.innerHTML = data.toLocaleDateString('pt-BR', opcoes); // data.toLocaleDateString('pt-BR', {dateStyle: 'full',timeStyle: 'short'});

// MANEIRA 3

// function getDiaSemanaTexto (diaSemana) {
//   const diasSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
//   return diasSemana[diaSemana];
// }
//
// function getNomeMes (numeroMes) {
//   const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
//   return meses[numeroMes];
// }
//
// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }
//
// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();
//
//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);
//
//   return (`${nomeDia}, ${data.getDay()} de ${nomeMes} de ${data.getFullYear()} <br/> ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
// }
//
// const data = new Date();
//
// const texto = document.querySelector('.container h1');
// texto.innerHTML = criaData(data);
