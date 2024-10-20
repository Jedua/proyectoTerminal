// routes/teams.routes.js
const express = require('express');
const router = express.Router();

// Importar controlador de equipos
const teamController = require('../controllers/teamController');

// Definir rutas para los equipos
router.get('/', teamController.getTeams);
router.post('/', teamController.createTeam);

module.exports = router;
