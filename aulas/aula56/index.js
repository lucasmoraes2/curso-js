// Factory Function (Função Fábrica)
// Constructor function (Função construtora)
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) { // fala: function(assunto)
//             // return `${nome} pesa ${this.peso} kg.`; // como o peso não está sendo passado como argumento precisa do "this"
//             return `${nome} está ${assunto}.`;
//         },
//         // peso: 80
//         altura: a,
//         peso: p,
//         imc() {
//             const indice = this.peso / (this.altura ** 2);
//             return indice.toFixed(2);
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Moraes', 1.8, 80);
// console.log(p1.fala('falando sobre JS')); // O "this" se refere sempre para quem está chamando a função, nesse caso é o p1
// console.log(p1.nome);
// console.log(p1.imc());
// const p2 = criaPessoa('Aurora', 'Aksnes', 1.7, 65);
// console.log(p2.fala('falando sobre música')); // Nesse caso, o "this" se refere a p2
// console.log(p2.imc());


function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`; // `${nome} ${sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            // console.log(valor);
            valor = valor.split(' '); // Array
            this.nome = valor.shift(); // retorna primeiro valor para variável e remove do array
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) { // fala: function(assunto)
            // return `${nome} pesa ${this.peso} kg.`; // como o peso não está sendo passado como argumento precisa do "this"
            return `${nome} está ${assunto}.`;
        },

        // peso: 80
        altura: a,
        peso: p,
        // Getter
        
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}


const p1 = criaPessoa('Lucas', 'Moraes', 1.8, 80);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);
p1.nomeCompleto = 'Caroline McConnell Aksnes';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
