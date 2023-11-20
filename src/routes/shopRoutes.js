const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController.js');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.itemid);
router.post('/item/:id/add', shopControllers.itemidadd);
router.get('/cart', shopControllers.cartget);
router.post('/cart', shopControllers.cartpost);

module.exports = router;