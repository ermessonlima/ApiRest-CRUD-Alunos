import User from '../models/User';

class UserController {
  async store(req, res) {
    const { nome, email, password } = req.body;
    try {
      const novoUser = await User.create({
        nome,
        email,
        password,
      });

      res.json(novoUser);
    } catch (err) {
      res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }
}

export default new UserController();
