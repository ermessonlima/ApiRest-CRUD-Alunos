import dotenv from 'dotenv';
import { resolve } from 'path';
import express from 'express';
import homeRoute from './src/routes/home.routes';
import userRoute from './src/routes/user.routes';
import tokenRoute from './src/routes/token.routes';
import alunosRoute from './src/routes/alunos.routes';
import photoRoute from './src/routes/photo.routes';
import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users', userRoute);
    this.app.use('/token', tokenRoute);
    this.app.use('/alunos', alunosRoute);
    this.app.use('/photos/', photoRoute);
  }
}

export default new App().app;
