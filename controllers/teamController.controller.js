exports.getEquipos = (req, res) => {
    // Datos simulados de categorías
    const equipos = [
      { idequipo: 1, nombre: 'A' },
      { idequipo: 2, nombre: 'B' },
      { idequipo: 3, nombre: 'C' },
      { idequipo: 4, nombre: 'D' }
    ];
  
    console.log('[DEBUG] Endpoint /api/equipos ha sido llamado');
    console.log('[DEBUG] Enviando equipos:', JSON.stringify(equipos, null, 2));
  
    // Enviar las categorías como respuesta
    res.json(equipos);
  };
  