const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Ruta para el inicio de sesión
router.post('/auth/iniciar-sesion', authController.login);

module.exports = router;
