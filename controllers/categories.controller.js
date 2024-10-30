// controllers/categories.controller.js
// Exportar las funciones para ser utilizadas en las rutas
exports.getCategories = (req, res) => {
  // Datos simulados de categorías
  const categorias = [
    { idcategoria: 1, nombre: 'Femenil' },
    { idcategoria: 2, nombre: 'Varonil' },
    { idcategoria: 3, nombre: 'Mixto' },
    { idcategoria: 4, nombre: 'Infantil' }
  ];

  console.log('[DEBUG] Endpoint /api/categorias ha sido llamado');
  console.log('[DEBUG] Enviando categorías:', JSON.stringify(categorias, null, 2));

  // Enviar las categorías como respuesta
  res.json(categorias);
};
