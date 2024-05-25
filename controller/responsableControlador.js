//llamado al modelo 
const Responsable = require('../models/responsable')

//TRAER todos los profesores cotrolador a exporta para rutas 
exports.getTodosLosResponsables = async (req, res)=>{
    try{
        const responsable = await Responsable.findAll();
        res.json(responsable);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
};

//TRAER responsable por ID, controladora exportar 
exports.getResponsablePorId = async (req, res) => {
    try {
       const { id } =  req.params;
       const responsable = await Responsable.findByPk(id);
        if (responsable) 
            res.json(responsable);
        else
            res.status(404).send({mensaje: 'Responsable no encontrado/a'})
    } 
    catch (error) {
        res.status(500).send(error);
    }
};

//CREAR responsable, controladora exportar 
exports.crearResponsable = async (req, res) => {
    try {
        const nuevoResponsable = await Responsable.create(req.body);
        res.status(201).json(nuevoResponsable);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

//ACTUALIZAR responsable, controladora exportar 
exports.actualizarResponsable = async (req, res) => {
    try {
        const { id } =  req.params;
        const [responsableActualizada] = await Responsable.update(req.body,{
            where : {idresponsable: id}
        });
        if (responsableActualizada){
            const responsable = await Responsable.findByPk(id);
            res.json(responsable);
        } else {
            res.status(404).json({mensaje: 'Responsable no encontrado/a'})
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

//ELIMINAR responsable, controladora exportar 
exports.eliminarResponsable = async (req, res) => {
    try {
        const { id } =  req.params;
        const eliminado =  await Responsable.destroy({
            where : {idresponsable : id}
        });
        if (eliminado)
            res.status(200).json({mensaje: 'Responsable eliminado/a'});
        else
            res.status(404).json({mensaje: 'Responsable no encontrado/a'});
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

