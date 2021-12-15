'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    imageURL: DataTypes.STRING,
    title: DataTypes.STRING,
    creator: DataTypes.STRING,
    mediaType: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {});
  Media.associate = function(models) {
  };
  return Media;
};
