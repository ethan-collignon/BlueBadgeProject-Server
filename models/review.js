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
      type: DataTypes.INTEGER(5), //need to rate 1-5, trying this solution
      allowNull: false
     },
      // owner_id:{ //added this in to try and fix the id issue. 
      // type: DataTypes.INTEGER,
      // allowNull: false
      // }
    });
    

    module.exports = Review;