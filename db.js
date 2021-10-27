    const Sequelize = require('sequelize');
     
     const sequelize = new Sequelize("postgres://postgres:Anadog0610@localhost:5432/bbserver");
     
     module.exports = sequelize;