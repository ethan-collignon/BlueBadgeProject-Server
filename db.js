    const Sequelize = require('sequelize');
     
     const sequelize = new Sequelize("postgres://postgres:81d35e8a960249ebb2159e3f3c3621c4@localhost:5432/bbserver");
     
     module.exports = sequelize;