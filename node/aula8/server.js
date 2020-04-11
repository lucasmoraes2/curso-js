const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Parâmetros de url -> /profiles/12345?campanha=googleads&nome_campanha=qualquer

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br><br>
    Idade: <input type="text" name="idade">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // req.params -> /profiles/3
    // req.query -> /profiles/?chave1=valor1&chave2=valor3
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome} ${req.body.idade}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});