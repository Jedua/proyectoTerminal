// server.js
const express = require('express');
const cors = require('cors');
const categoriesRoutes = require('./routes/categories.routes');
const app = express();

// Habilitar CORS y analizar JSON
app.use(cors());
app.use(express.json());

// Middleware para registrar cada solicitud recibida
app.use((req, res, next) => {
  console.log(`[DEBUG] Solicitud recibida: ${req.method} ${req.path}`);
  next();
});

// Registrar las rutas de categorías con el prefijo '/api'
app.use('/api', categoriesRoutes);

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
});
