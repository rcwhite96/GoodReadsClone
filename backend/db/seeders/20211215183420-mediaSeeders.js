'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Media', [
      {
        imageURL: 'https://s2.gaming-cdn.com/images/products/2359/orig/game-steam-deus-ex-game-of-the-year-edition-cover.jpg',
        title: 'Deus Ex: Game of the Year Edition',
        creator: 'Ion Storm',
        description: 'Deus Ex is a 2000 action role-playing game developed by Ion Storm and published by Eidos Interactive. Set in a cyberpunk-themed dystopian world in the year 2052, the game follows JC Denton, an agent of the fictional agency United Nations Anti-Terrorist Coalition (UNATCO), who is given superhuman abilities by nanotechnology, as he sets out to combat hostile forces in a world ravaged by inequality and a deadly plague. His missions entangle him in a conspiracy that brings him into conflict with the Triads, Majestic 12, and the Illuminati.',
        mediaType: 'Video Game',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://www.mobygames.com/images/covers/l/34558-deus-ex-invisible-war-windows-front-cover.jpg',
        title: 'Deus Ex: Invisible War',
        creator: 'Ion Storm',
        description: `Deus Ex: Invisible War is a 2003 action role-playing video game developed by Ion Storm and published by Eidos Interactive for Microsoft Windows and Xbox. It is the second game in the Deus Ex series. The gameplay—combining first-person shooter, stealth, and role-playing elements—features exploration and combat in environments connected to multiple city-based hubs, in addition to quests that can be completed in a variety of ways and flexible character customization. Conversations between characters feature a variety of responses, with options in conversations at crucial story points affecting how some events play out.
        Invisible War takes place twenty years after Deus Ex. The game follows a scenario whereby the first game's events led to a period of war and economic depression dubbed the "Collapse", which resulted in several factions attaining power and influence across the world. The player character, Alex D, is evacuated from Chicago to Seattle following a terrorist attack, soon becoming embroiled in a network of plots as the world's factions fight for control of the world. In addition to the series' recurring cyberpunk setting and conspiracy theory motif, the story focuses on the theme of terrorism.`,
        mediaType: 'Video Game',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://static.wikia.nocookie.net/deusex/images/a/a0/DXHR_box_cover.jpg/revision/latest?cb=20200825225713&path-prefix=en',
        title: 'Deus Ex: Human Revolution',
        creator: 'Square Enix',
        description: `Set in the year 2027, players control Adam Jensen, a security officer for Sarif Industries, which develops controversial artificial organs dubbed "augmentations". After an attack on Sarif, Jensen undergoes extensive augmentation and investigates the shadowy organization behind the attack. The story explores themes of transhumanism and the growing power of megacorporations and their impact on social class. It also uses the series' cyberpunk setting and conspiracy theory motif.`,
        mediaType: 'Video Game',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://gh.cdn.sewest.net/assets/ident//games/deus-ex-mankind-divided/en_US/GamePage_Header_Portrait_03.jpg?quality=65&width=960px&height=1280px',
        title: 'Deus Ex: Mankind Divided',
        creator: 'Square Enix',
        description: `Set in 2029, two years after Human Revolution, the world is divided between normal humans and those with advanced, controversial artificial organs dubbed "augmentations". After a violent event known as the Aug Incident, augmented people have been segregated; this prompts heated debate and an era of "mechanical apartheid". Main protagonist Adam Jensen, equipped with advanced new augmentations after Human Revolution, is a double agent for the hacker group Juggernaut Collective to expose the Illuminati, which is orchestrating events behind the scenes. The story explores themes of transhumanism and discrimination, using the series' recurring cyberpunk setting and conspiracy theory motif.`,
        mediaType: 'Video Game',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Media', null, {});
  }
};
