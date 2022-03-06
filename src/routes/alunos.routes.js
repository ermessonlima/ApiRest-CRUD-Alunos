import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import tokenAutorization from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', tokenAutorization, alunoController.store);
router.put('/:id', tokenAutorization, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', tokenAutorization, alunoController.delete);

export default router;
