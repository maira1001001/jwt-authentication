import { Router } from 'express';

import auth from './auth';
import cards from './cards';

const router = Router();

router.use('/', auth);
router.use('/cards', cards);

export default router;
