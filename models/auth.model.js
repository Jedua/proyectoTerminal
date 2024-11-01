const db = require('../database/database');

// Busca un usuario en la base de datos por nombre de usuario
exports.findUserByUsuario = async (usuario) => {
  try {
    const [user] = await db.query('SELECT * FROM usuario WHERE nombre_usuario = ?', [usuario]);
    return user[0]; // Devuelve el primer resultado (suponiendo que el nombre de usuario es único)
  } catch (error) {
    console.error('Error al buscar usuario por nombre de usuario:', error);
    throw error;
  }
};
