'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Media', [{
        imageURL: 'https://s2.gaming-cdn.com/images/products/2359/orig/game-steam-deus-ex-game-of-the-year-edition-cover.jpg',
        title: 'Deus Ex: Game of the Year Edition',
        creator: 'Ion Storm',
        description: 'this is a video game',
        mediaType: 'Video Game',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Media', null, {});
  }
};
