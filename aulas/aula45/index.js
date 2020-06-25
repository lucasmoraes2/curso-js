// Try, catch, finally

// try {
//     // É executada quando não há erros
//     // console.log(a); // Gerando um erro
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro'); // Pulando para o catch
//     console.log('Fechei o arquivo'); // Não foi executado

//     // Pode colocar outro try, catch e finally dentro do try, catch ou finally
//     // try {
//     //     console.log('Não deu erro');
//     // } catch (e) {
//     //     console.log('Deu erro');
//     // } finally {
//     //     console.log('Também sou finally');
//     // }

// } catch (err) {
//     // É executada quando há erros
//     console.log('Tratando o erro');
// } finally {
//     // É executada sempre
//     console.log('Fechando o arquivo, caso o arquivo esteja aberto'); // FINALLY: Eu sempre sou executado
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 00:00:00');
    const hora = retornaHora(11);
    console.log(hora);
} catch(err) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia');
}