const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Actividad = require('./actividad');

//definimos el modelo de los responsables
const Responsable = sequelize.define('responsables',{
    idresponsable : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    nomresponsable : {
        type : DataTypes.STRING,
        allowNull : false
    },
    comision : {
        type : DataTypes.STRING,
        allowNull : false
    },
    asesoria : {
        type : DataTypes.STRING,
        allowNull : false
    },
    area : {
        type : DataTypes.STRING,
        allowNull : false
    },
    cursos : {
        type : DataTypes.STRING,
        allowNull : false
    },
    celular : {
        type : DataTypes.STRING,
        allowNull : false
    },
});


module.exports = Responsable;