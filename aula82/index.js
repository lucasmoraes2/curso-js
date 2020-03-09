// Herança com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Smartphone');
// console.log(d1);
// d1.ligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = true;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.');
    }

    falaOi() { // Método apenas no Tablet
        console.log('Oi');
    }
}

// const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
// console.log(s1);
// s1.ligar();
// console.log(s1);

const t1 = new Tablet('Tablet', true);
console.log(t1);
t1.ligar();
console.log(t1);
t1.falaOi();