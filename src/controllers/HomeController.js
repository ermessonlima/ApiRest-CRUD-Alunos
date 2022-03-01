import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'João',
      sobrenome: 'Silva',
      email: 'ermesson1@hotmail.com',
      idade: 20,
      peso: 80.5,
      altura: 1.80,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
