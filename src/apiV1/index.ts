import { Router } from 'express';
import Order from './routes/OrderRoutes';

const router: Router = Router();

router.use('/orders', Order);

export default router;
