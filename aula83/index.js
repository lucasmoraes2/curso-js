// Métodos estáticos

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de instância => controle1.aumentarVolume()
    aumentarVolume() {
        this.volume += 2;
    }
    
    diminuirVolume() {
        this.volume -= 2;
    }

    // Métodos estáticos => ControleRemoto.trocaPilha()
    static trocaPilha() {
        console.log('Trocando a pilha');
    }

    static soma(x, y) {
        console.log(this);
        return x + y;
    }

}

const controle1 = new ControleRemoto('LG');
console.log(controle1);
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(2, 4));