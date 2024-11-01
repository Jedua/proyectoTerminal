// server.js
const express = require('express');
const cors = require('cors');

// Importación de rutas
const categoriesRoutes = require('./routes/categories.routes');
const teamsRoutes = require('./routes/teams.routes');
const registroRoutes = require('./routes/registro.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

// Habilitar CORS y analizar JSON
app.use(cors());
app.use(express.json());

// Middleware para registrar cada solicitud recibida (para depuración)
app.use((req, res, next) => {
  console.log(`[DEBUG] Solicitud recibida: ${req.method} ${req.path}`);
  next();
});

// Registro de rutas con prefijo '/api'
app.use('/api', categoriesRoutes); // Rutas de categorías
app.use('/api', teamsRoutes);      // Rutas de equipos
app.use('/api', registroRoutes);    // Rutas de registro de usuarios
app.use('/api', authRoutes);        // Rutas de autenticación

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  console.log(`[DEBUG] Endpoint no encontrado: ${req.method} ${req.path}`);
  res.status(404).send('Endpoint no encontrado');
});

// Iniciar servidor y mostrar la URL de cada endpoint registrado
const port = 3000;
app.listen(port, () => {
  console.log(`[DEBUG] Servidor corriendo en el puerto ${port}`);
  console.log(`[DEBUG] Endpoint disponible en: http://localhost:${port}/api/categorias`);
  console.log(`[DEBUG] Endpoint disponible en: http://localhost:${port}/api/equipos`);
  console.log(`[DEBUG] Endpoint disponible en: http://localhost:${port}/api/registro`);
  console.log(`[DEBUG] Endpoint disponible en: http://localhost:${port}/api/auth/iniciar-sesion`);
});
