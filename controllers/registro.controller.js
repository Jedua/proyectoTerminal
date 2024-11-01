const bcrypt = require('bcryptjs');
const registroModel = require('../models/registro.model');

// Controlador para registrar un nuevo usuario
exports.registrarUsuario = async (req, res) => {
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
  } = req.body;

  try {
    // Encriptar la contraseña antes de guardar en la base de datos
    const salt = await bcrypt.genSalt(10);  // Genera un "salt" para la encriptación
    const hashedPassword = await bcrypt.hash(pass, salt);  // Encripta la contraseña

    // Insertar en la tabla `usuario` con la contraseña encriptada
    const result = await registroModel.insertarUsuario({
      nombre,
      apellidos,
      correo,
      direccion,
      telefono,
      fecha_nacimiento,
      sexo,
      usuario,
      pass: hashedPassword  // Guarda la contraseña encriptada
    });

    // Obtener el ID del usuario recién creado
    const idusuario = result.insertId;

    // Enviar respuesta de éxito
    res.status(201).json({ message: 'Usuario registrado exitosamente', idusuario });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario', details: error.message });
  }
};
