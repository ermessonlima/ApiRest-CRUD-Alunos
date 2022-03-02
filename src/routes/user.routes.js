import { Router } from 'express';
import getUserPage from '../controllers/UserController';

const router = new Router();

router.post('/', getUserPage.store);

export default router;
