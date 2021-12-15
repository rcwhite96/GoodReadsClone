'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Shelves', [{
        title: 'My games',
        userId: 1,
        mediaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Shelves', null, {});
  }
};
