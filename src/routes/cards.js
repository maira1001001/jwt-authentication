import { Router } from 'express';
import { addCard } from '../controllers/card.controller';
import { authenticateUser } from '../middlewares/auth';

const router = Router();

router.get('/', authenticateUser, addCard);

export default router;
