// routes/categories.routes.js
const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller');

// Registrar el endpoint para obtener categorías
router.get('/categorias', categoriesController.getCategories);

module.exports = router;
