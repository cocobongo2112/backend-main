const express = require('express');
const rutasUsuario = require('./pruebas/rutas');
const app = express();

// Usar las rutas
app.use(rutasUsuario);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});