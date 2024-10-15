const mysql = require('mysql2');
const { host, user, password, database } = require('../config/config');  // Importar las variables de config.js

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
