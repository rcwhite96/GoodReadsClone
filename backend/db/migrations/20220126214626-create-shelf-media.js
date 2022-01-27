'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ShelfMedia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mediaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "Media",
          key:"id"
          }
      },
      shelfId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "Shelves",
          key: "id"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ShelfMedia');
  }
};
