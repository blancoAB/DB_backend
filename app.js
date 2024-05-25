//llamado de librerias
const express = require ('express');
const app = express();
//llamando a las rutas por que es el que se comunica con lo demas 
const actividadRutas = require('./routes/actividadRutas');
const responsableRutas = require('./routes/responsableRutas');


//middleawre
app.use(express.json());

//para usar rutas
app.use('/api/actividades',actividadRutas);
app.use('/api/responsables',responsableRutas);

//levantar el servidor 
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Servidor levantado http://localhost:'+PORT);
});