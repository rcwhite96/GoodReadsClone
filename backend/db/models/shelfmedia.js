'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShelfMedia = sequelize.define('ShelfMedia', {
    mediaId: DataTypes.INTEGER,
    shelfId: DataTypes.INTEGER
  }, {});
  ShelfMedia.associate = function(models) {
    ShelfMedia.belongsToMany(models.Shelf, {
      through: 'ShelfMedia',
      foreignKey: 'mediaId',
      otherKey: 'mediaId'
    }),
    ShelfMedia.belongsToMany(models.Media, {
      through: 'ShelfMedia',
      foreignKey: 'shelfId',
      otherKey: 'shelfId'
    })
  };
  return ShelfMedia;
};
