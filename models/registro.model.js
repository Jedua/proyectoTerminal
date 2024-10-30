const db = require('../database/database');

// Función para insertar un nuevo usuario en la tabla `usuario`
const insertarUsuario = async (userData) => {
  const {
    nombre,
    apellidos,
    correo,
    direccion,
    telefono,
    fecha_nacimiento,
    sexo,
    usuario,
    pass
  } = userData;

  try {
    const [result] = await db.query(
      'INSERT INTO usuario (nombre, apellidos, direccion, telefono, fecha_nacimiento, nombre_usuario, email, pass) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [nombre, apellidos, direccion, telefono, fecha_nacimiento, usuario, correo, pass]
    );
    return result;
  } catch (error) {
    throw new Error('Error al registrar la persona: ' + error.message);
  }
};

module.exports = {
  insertarUsuario
};
