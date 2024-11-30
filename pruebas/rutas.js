const express = require('express');
const router = express.Router();
const { horario, saludar } = require('./middlewares');

// Ruta principal con saludo y hora
router.get('/', saludar, horario, (req, res) => {
    const saludo = req.saludo;
    const horarioMensaje = req.horarioMensaje;
    
    // Respuesta para el navegador
    res.send(`
        <h1>${saludo}</h1>
        <p>${horarioMensaje}</p>
    `);
});

module.exports = router;