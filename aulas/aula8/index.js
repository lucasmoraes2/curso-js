const nome = 'Lucas';
const sobrenome = 'Moraes';
const idade = 22;
const peso = 62;
const alturaEmM = 1.64;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2020 - 22;

console.log(nome + ' ' + sobrenome + ' tem' + idade + ' anos, pesa ' + peso + ' kg');
console.log('tem ' + alturaEmM + ' de altura e seu IMC é de ' + indiceMassaCorporal); 
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento + '.');

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`); 
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
