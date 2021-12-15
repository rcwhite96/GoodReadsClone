'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    mediaId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {
      foreignKey:'userId'
    });
    Review.belongsTo(models.Media, {
      foreignKey:'mediaId'
    });
  };
  return Review;
};
