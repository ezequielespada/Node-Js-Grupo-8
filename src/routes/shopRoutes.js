import { Router } from 'express'
const router = Router()
import shopControllers from '../controllers/shopController.js';

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.itemid);
router.post('/item/:id/add', shopControllers.itemidadd);
router.get('/cart', shopControllers.cartget);
router.post('/cart', shopControllers.cartpost);

export default router;