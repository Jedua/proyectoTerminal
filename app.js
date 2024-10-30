// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const categoriesRoutes = require('./routes/categories.routes'); // Importar las rutas de categorías
const teamsRoutes = require('./routes/teams.routes'); // Importar las rutas de equipos

const app = express();

// Habilitar CORS y análisis de JSON
app.use(cors());
app.use(express.json());

// Middleware para registrar cada solicitud recibida
app.use((req, res, next) => {
  console.log(`[DEBUG] Solicitud recibida: ${req.method} ${req.path}`);
  next();
});

// Definir rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Lion League');
});

// Rutas para categorías y equipos
app.use('/api/categorias', categoriesRoutes);
app.use('/api/equipos', teamsRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  console.log(`[DEBUG] Endpoint no encontrado: ${req.method} ${req.path}`);
  res.status(404).send('Endpoint no encontrado');
});

module.exports = app;
