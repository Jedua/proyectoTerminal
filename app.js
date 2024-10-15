const express = require('express');
const cors = require('cors');
const app = express();

// Configuración de middlewares
app.use(cors());
app.use(express.json());  // Para parsear las peticiones JSON

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Lion League');
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
