exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br><br>
    Idade: <input type="text" name="idade">
    <button>Enviar</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST');
};