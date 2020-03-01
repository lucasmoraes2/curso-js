// Polimorfismo

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Agência/Conta: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// const conta1 = new Conta(11, 22, 100);
// conta1.depositar(21);
// conta1.sacar(200);

console.log('Conta Corrente');
const contaCorrente1 = new ContaCorrente(11, 22, 0, 100);
contaCorrente1.depositar(10);
contaCorrente1.sacar(110);
contaCorrente1.sacar(1); // Saldo insuficiente: -100

console.log('Conta Poupança');
const contaPoupanca1 = new ContaPoupanca(11, 22, 0);
contaPoupanca1.depositar(10);
contaPoupanca1.sacar(110); // Saldo insuficiente: 10
contaPoupanca1.sacar(1);