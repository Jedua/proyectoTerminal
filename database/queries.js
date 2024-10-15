const db = require('./database');

const getAllTeams = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM equipo';
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

const addTeam = (team) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO equipo (nombre, logo) VALUES (?, ?)';
        db.query(query, [team.nombre, team.logo], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = {
    getAllTeams,
    addTeam
};
