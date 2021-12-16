'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Shelves', [
      {
        title: 'My Games',
        userId: 1,
        mediaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My Books',
        userId: 1,
        mediaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'My Movies',
        userId: 1,
        mediaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Shelves', null, {});
  }
};
