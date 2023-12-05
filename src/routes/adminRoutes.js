import { Router } from 'express'
const router = Router()
import adminControllers from '../controllers/adminController.js';

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.createget);
router.post('/create', adminControllers.createpost);
router.get('/edit/:id', adminControllers.editidget);
router.put('/edit/:id', adminControllers.editidput);
router.delete('/delete/:id', adminControllers.deleteid);

export default router;