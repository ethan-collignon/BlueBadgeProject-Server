     const Sequelize = require('sequelize');
     
     const sequelize = new Sequelize("postgres://postgres:060194@localhost:5432/bbserver");
     
     module.exports = sequelize;