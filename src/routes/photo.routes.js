import { Router } from 'express';

import photoController from '../controllers/PhotoController';
import tokenAutorization from '../middlewares/loginRequired';

const router = new Router();

router.post('/', tokenAutorization, photoController.store);

export default router;
