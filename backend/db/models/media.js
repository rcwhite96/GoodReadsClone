'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    imageURL: DataTypes.STRING,
    title: DataTypes.STRING,
    creator: DataTypes.STRING,
    mediaType: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  Media.associate = function(models) {
    Media.hasMany(models.Review, {
      foreignKey: 'mediaId'
    })
    Media.belongsToMany(models.Shelf, {
      through: 'ShelfMedia',
      foreignKey: 'mediaId'
    })
    Media.belongsTo(models.User, {
      foreignKey:'userId'
    });
  };
  return Media;
};
