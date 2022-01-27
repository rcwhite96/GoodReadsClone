'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShelfMedia = sequelize.define('ShelfMedia', {
    mediaId: DataTypes.INTEGER,
    shelfId: DataTypes.INTEGER
  }, {});
  ShelfMedia.associate = function(models) {
    // ShelfMedia.belongsTo(Shelf, {
    //   through: 'ShelfMedia',
    //   foreignKey: 'mediaId'
    // }),
    // ShelfMedia.belongsTo(Media, {
    //   through: 'ShelfMedia',
    //   foreignKey: 'shelfId'
    // })
  };
  return ShelfMedia;
};
