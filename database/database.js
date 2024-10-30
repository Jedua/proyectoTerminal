const mysql = require('mysql2/promise'); // Asegúrate de usar el módulo de promesas
const { host, user, password, database } = require('../config/config');  // Importar las variables de config.js

// Crear una conexión de "pool" con promesas
const connection = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database
});

// Exportar la conexión de pool
module.exports = connection;
