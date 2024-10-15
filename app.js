require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const teamController = require('./controllers/teamController');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Lion League');
});

// Rutas para equipos
app.get('/equipos', teamController.getTeams);
app.post('/equipos', teamController.createTeam);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
