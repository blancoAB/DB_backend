//utilizamos express y rutas
const express = require('express');
const router = express.Router();
//llamamos al controlador 
const actividadControlador = require('../controller/actividadControlador');

//creamos la ruta con la que funcionara para nuestro 1er controlador 
//TRAER todas las actividades 
router.get('/',actividadControlador.getTodasLasActividades);

//creamos la ruta para TRAER actividad por ID
router.get('/:id',actividadControlador.getActividadPorId);

//creamos la ruta para CREAR actividad 
router.post('/',actividadControlador.crearActividad);

//creamos la ruta para ACTUALIZAR actividad desde ID
router.put('/:id',actividadControlador.actualizarActividad);

//creamos la ruta para ELIMINAR actividad desde ID
router.delete('/:id',actividadControlador.eliminarActividad);

//creamos la ruta para REPORTE1 actividades
router.post('/reporte1/',actividadControlador.ActividadesPorResponsable);

//creamos la ruta para REPORTE2 actividades
router.post('/reporte2/',actividadControlador.getActividadesPortipo);

module.exports = router;