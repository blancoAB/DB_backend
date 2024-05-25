//utilizamos express y rutas
const express = require('express');
const router = express.Router();
//llamamos al controlador 
const responsableControlador = require('../controller/responsableControlador');

//creamos la ruta con la que funcionara para nuestro 1er controlador 
//TRAER todas las actividades 
router.get('/',responsableControlador.getTodosLosResponsables);

//creamos la ruta para TRAER actividad por ID
router.get('/:id',responsableControlador.getResponsablePorId);

//creamos la ruta para CREAR actividad 
router.post('/',responsableControlador.crearResponsable);

//creamos la ruta para ACTUALIZAR actividad desde ID
router.put('/:id',responsableControlador.actualizarResponsable);

//creamos la ruta para ELIMINAR actividad desde ID
router.delete('/:id',responsableControlador.eliminarResponsable);

module.exports = router;