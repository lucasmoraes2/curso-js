import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Aurora',
      sobrenome: 'Aksnes',
      email: 'aurora@email.com',
      idade: 23,
      peso: 60,
      altura: 1.63,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
