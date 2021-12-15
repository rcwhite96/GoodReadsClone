'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    mediaId: DataTypes.INTEGER
  }, {});
  Shelf.associate = function(models) {
    // associations can be defined here
  };
  return Shelf;
};