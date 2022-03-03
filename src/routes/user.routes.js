import { Router } from 'express';
import getUserPage from '../controllers/UserController';

const router = new Router();

router.post('/', getUserPage.store);
router.get('/', getUserPage.index);
router.get('/:id', getUserPage.show);
router.put('/:id', getUserPage.update);
router.delete('/:id', getUserPage.delete);

export default router;
