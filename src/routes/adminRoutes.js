const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController.js');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.createget);
router.post('/create', adminControllers.createpost);
router.get('/edit/:id', adminControllers.editidget);
router.put('/edit/:id', adminControllers.editidput);
router.delete('/delete/:id', adminControllers.deleteid);

module.exports = router;