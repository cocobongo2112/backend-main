function horario(req, res, next) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    console.log(`Tú has consultado la ruta ${req.path} el día ${formattedDate} a la hora ${formattedTime}.`);
    next();
}

function mensaje(req, res, next) {
    console.log("Hola, este es un middleware de mensaje");
    next();
}

module.exports = { 
    horario,
    mensaje 
};