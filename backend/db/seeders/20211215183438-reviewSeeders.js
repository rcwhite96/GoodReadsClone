'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
      {
        title: 'Fun game',
        content: 'i love this game!',
        userId: 1,
        mediaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "It's OK.",
        content: "Not as good as the first one.",
        userId: 1,
        mediaId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
