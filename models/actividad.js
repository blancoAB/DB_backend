'use strict';
const {
  Model
} = require('sequelize');

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Responsable = require('./responsable');

//definimos el modelo de las activadades 
const Actividad = sequelize.define('actividades',{
    idactividad : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    nomactividad : {
        type : DataTypes.STRING,
        allowNull : false
    },
    idresponsable : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    participantes : {
        type : DataTypes.STRING,
        allowNull : false
    },
    lugar : {
        type : DataTypes.STRING,
        allowNull : false
    },
    fecha : {
        type : DataTypes.STRING,
        allowNull : false
    },
    hora : {
        type : DataTypes.STRING,
        allowNull : false
    },
    idtipo : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    descripcion : {
        type : DataTypes.STRING,
        allowNull : false
    },
    observacion : {
        type : DataTypes.STRING,
        allowNull : false
    },
    documento : {
        type : DataTypes.STRING,
        allowNull : false
    },
    usuario : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
}); 

// relacion 1 a 1
Actividad.belongsTo(Responsable, { foreignKey: 'idresponsable', as: 'responsables' });
// relacion 1 a muchos
Responsable.hasMany(Actividad, { foreignKey: 'idresponsable', as: 'actividades' });

module.exports = Actividad;