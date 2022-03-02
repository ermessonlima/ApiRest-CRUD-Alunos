import User from '../models/User';

class UserController {
  async store(req, res) {
    const novoUser = await User.create({
      nome: 'João',
      email: 'ermesson1@hotmail.com',
      password: '123456',
    });

    res.json(novoUser);
  }
}

export default new UserController();
