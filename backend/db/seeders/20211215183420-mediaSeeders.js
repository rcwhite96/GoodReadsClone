'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Media', [{
        title: 'Deus Ex: Game of the Year Edition',
        creator: 'Ion Storm',
        description: 'this is a video game',
        mediaType: 'Video Game',
        status: false
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Media', null, {});
  }
};
