'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('ShelfMedia', [
        {
          mediaId: 1,
          shelfId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ShelfMedia', null, {});
  }
};
