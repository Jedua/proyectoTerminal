require('dotenv').config();  // Cargar las variables de entorno

// Exportar las variables de entorno para ser usadas en otras partes del proyecto
module.exports = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};
