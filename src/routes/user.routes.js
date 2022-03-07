import { Router } from 'express';
import userController from '../controllers/UserController';
import tokenAutorization from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', tokenAutorization, userController.store); // Create user
router.put('/', tokenAutorization, userController.update); // Update user
router.delete('/', tokenAutorization, userController.delete); // Delete user

export default router;
