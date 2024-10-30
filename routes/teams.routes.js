const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController.controller');

// Registrar el endpoint para obtener categorías
router.get('/equipos', teamController.getEquipos);

module.exports = router;
