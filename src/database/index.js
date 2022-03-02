import Sequilize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequilize(databaseConfig);

models.forEach((model) => model.init(connection));
