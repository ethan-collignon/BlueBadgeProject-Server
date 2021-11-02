     const { DataTypes } = require('sequelize');
     const db = require('../db');
     
     const Review = db.define('review', {
      reviewTitle: {
       type: DataTypes.STRING,
       allowNull: false
      },
      nameOfMovie: {
      type: DataTypes.STRING,
      allowNull: false
     },
     entry: {
      type: DataTypes.STRING,
      allowNull: false
     },
     rating: {
      type: DataTypes.INTEGER, //need to rate 1-5, trying this solution
      allowNull: false
     }
    });
    
    module.exports = Review;