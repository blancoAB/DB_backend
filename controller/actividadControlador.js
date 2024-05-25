//llamado al modelo 
const Actividad = require('../models/actividad');
const Responsable = require('../models/responsable');
const sequelize = require('../config/database');
const { Op } = require('sequelize');

//TRAER todas las actividades cotrolador a exporta para rutas
exports.getTodasLasActividades = async (req, res)=>{
    try{
        const actividad = await Actividad.findAll();
        res.json(actividad);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
};

//TRAER actividad por ID, controladora exportar 
exports.getActividadPorId = async (req, res) => {
    try {
       const { id } =  req.params;
       const actividad = await Actividad.findByPk(id);
        if (actividad) 
            res.json(actividad);
        else
            res.status(404).send({mensaje: 'Actividad No Encontrada'})
    } 
    catch (error) {
        res.status(500).send(error);
    }
};

//CREAR actividad, controladora exportar 
exports.crearActividad = async (req, res) => {
    try {
        const nuevoActividad = await Actividad.create(req.body);
        res.status(201).json(nuevoActividad);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

//ACTUALIZAR actividad, controladora exportar 
exports.actualizarActividad = async (req, res) => {
    try {
        const { id } =  req.params;
        const [actividadActualizada] = await Actividad.update(req.body,{
            where : {idactividad: id}
        });
        if (actividadActualizada){
            const actividad = await Actividad.findByPk(id);
            res.json(actividad);
        } else {
            res.status(404).json({mensaje: 'Actividad no encontrada'})
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

//ELIMINAR actividad, controladora exportar 
exports.eliminarActividad = async (req, res) => {
    try {
        const { id } =  req.params;
        const eliminado =  await Actividad.destroy({
            where : {idactividad : id}
        });
        if (eliminado)
            res.status(200).json({mensaje: 'Actividad eliminada'});
        else
            res.status(404).json({mensaje: 'Actividad no encontrada'});
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

//REPORTE 1 endpoint devolverá todas las actividades asignadas a un responsable específico, filtradas por fecha y lugar.
exports.ActividadesPorResponsable = async (req, res) => {
    try {
        const { idresponsable, fechaInicio, fechaFin, lugar } = req.body;

        const actividades = await Actividad.findAll({
            where: {
                idresponsable,
                fecha: {
                    [Op.between]: [fechaInicio, fechaFin]
                },
                lugar
            },
            include: {
                model: Responsable,
                as: 'responsables',
                attributes: ['nomresponsable'] // Campos de responsable que queremos incluir
            }
        });

        res.json(actividades);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

//REPORTE 2 endpoint para traer actividades tipo, participantes y Lugar
exports.getActividadesPortipo = async (req, res) => {
    try {
        const { participantes, lugar, fechaInicio, fechaFin, idtipo } = req.body;

        const actividades = await Actividad.findAll({
            where: {
                participantes: {
                    [Op.like]: `%${participantes}%`
                },
                lugar,
                fecha: {
                    [Op.between]: [fechaInicio, fechaFin]
                },
                idtipo
            },
            attributes: [
                'idactividad', 
                'nomactividad',  
                'participantes', 
                'lugar', 
                'fecha',  
                [sequelize.literal('(SELECT nomtipo FROM tipo WHERE tipo.idtipo = actividades.idtipo)'), 'tipo'],
                'descripcion'
                ]
        });

        res.json(actividades);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};