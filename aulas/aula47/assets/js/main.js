function timer() {

    function criaHoraComSegundos(segundos) {
        const data = new Date(segundos * 1000); // segundos * 1000 = milisegundos (data = 01/01/1970 às 00:00:00)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT' // UTC
        });
    }
    
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraComSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const elemento = e.target;
        
        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00';
        }
        
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        
        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    
    });
    
    // iniciar.addEventListener('click', function(event) {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });
    
    // pausar.addEventListener('click', function(event) {
    //     relogio.classList.add('pausado');
    //     clearInterval(timer);
    // });
    
    // zerar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     segundos = 0;
    //     relogio.innerHTML = '00:00:00';
    // });

}

timer();