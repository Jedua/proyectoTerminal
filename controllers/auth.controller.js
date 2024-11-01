const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authModel = require('../models/auth.model');

const SECRET_KEY = 'your_secret_key'; // Cambia esta clave por una segura en producción

// Controlador para el inicio de sesión
exports.login = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    // Buscar el usuario por nombre de usuario
    const user = await authModel.findUserByUsuario(usuario);

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.pass);
    if (!validPassword) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: user.idusuario, usuario: user.nombre_usuario },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    // Responder con el token
    res.json({ token });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
