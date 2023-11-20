const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController.js');

router.get('/login', authControllers.loginget);
router.post('/login', authControllers.loginpost);
router.get('/register', authControllers.registerget);
router.post('/register', authControllers.registerpost);
router.get('/logout', authControllers.logout);


module.exports = router;