const { getAllTeams, addTeam } = require('../database/queries');

// Controlador para obtener todos los equipos
const getTeams = async (req, res) => {
    try {
        const teams = await getAllTeams();
        res.status(200).json(teams);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los equipos' });
    }
};

// Controlador para crear un equipo
const createTeam = async (req, res) => {
    const newTeam = req.body;
    try {
        await addTeam(newTeam);
        res.status(201).json({ message: 'Equipo creado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el equipo' });
    }
};

module.exports = {
    getTeams,
    createTeam
};
