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

      return res.json(novoUser);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      console.log(req.userId);
      console.log(req.userEmail);
      return res.json(users);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({ errors: ['Id não informado'] });
      }

      const newData = await user.update(req.body);
      return res.json(newData);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({ errors: ['Id não informado'] });
      }
      await user.destroy();
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }
}

export default new UserController();
