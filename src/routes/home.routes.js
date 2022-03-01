import { Router } from 'express';
import getHomePage from '../controllers/HomeController';

const router = new Router();

router.get('/', getHomePage.index);

export default router;
