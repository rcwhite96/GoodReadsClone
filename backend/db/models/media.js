'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    creator: DataTypes.STRING,
    mediaType: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {});
  Media.associate = function(models) {
    
  };
  return Media;
};
