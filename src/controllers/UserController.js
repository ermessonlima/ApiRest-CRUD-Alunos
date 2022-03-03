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
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async update(req, res) {
    try {
      console.log(req.params);
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Id não informado'] });
      }
      const user = await User.findByPk(req.params.id);
      const { nome, email, password } = req.body;
      await user.update({ nome, email, password });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Id não informado'] });
      }
      const user = await User.findByPk(req.params.id);
      await user.destroy();
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }
}

export default new UserController();
