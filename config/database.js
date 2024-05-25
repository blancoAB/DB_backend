const Sequelize = require('sequelize');

const sequelize =new Sequelize('actividaddb','root','',{
    host: 'localhost',
    dialect: 'mysql',
    define:{
        timestamps : false
    }
});

//exportar 
module.exports = sequelize;