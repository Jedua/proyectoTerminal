// server.js
const express = require('express');
const cors = require('cors');
const categoriesRoutes = require('./routes/categories.routes');
const teamsRoutes = require('./routes/teams.routes');
const registroRoutes = require('./routes/registro.routes'); // Importa las rutas de registro
const app = express();

// Habilitar CORS y analizar JSON
app.use(cors());
app.use(express.json());



// Middleware para registrar cada solicitud recibida
app.use((req, res, next) => {
  console.log(`[DEBUG] Solicitud recibida: ${req.method} ${req.path}`);
  next();
});

// Registrar las rutas de categorías, equipos y registro con el prefijo '/api'
app.use('/api', categoriesRoutes);
app.use('/api', teamsRoutes);
app.use('/api', registroRoutes); // Registra el endpoint de registro

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  console.log(`[DEBUG] Endpoint no encontrado: ${req.method} ${req.path}`);
  res.status(404).send('Endpoint no encontrado');
});

// Iniciar servidor y mostrar la URL del endpoint
const port = 3000;
app.listen(port, () => {
  console.log(`[DEBUG] Servidor corriendo en el puerto ${port}`);
  console.log(`[DEBUG] Endpoint disponible en: http://localhost:${port}/api/categorias`);
  console.log(`[DEBUG] Endpoint disponible en: http://localhost:${port}/api/equipos`);
  console.log(`[DEBUG] Endpoint disponible en: http://localhost:${port}/api/registro`);
});
