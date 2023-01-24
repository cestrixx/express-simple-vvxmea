import { Router } from 'express';
import { other1, other2 } from '../controllers';

const router = Router();

router.get('/other1', other1);

router.post('/other2', other2);

export default router;
