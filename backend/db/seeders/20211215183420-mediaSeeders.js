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
      {
        imageURL: 'https://www.blackgate.com/wp-content/uploads/2017/04/Ghost-In-The-Shell-1995.jpg',
        title: 'Ghost In The Shell (1995)',
        creator: 'Mamoru Oshii',
        description: `In this Japanese animation, cyborg federal agent Maj. Motoko Kusanagi (Mimi Woods) trails "The Puppet Master" (Abe Lasser), who illegally hacks into the computerized minds of cyborg-human hybrids. Her pursuit of a man who can modify the identity of strangers leaves Motoko pondering her own makeup and what life might be like if she had more human traits. With her partner (Richard George), she corners the hacker, but her curiosity about her identity sends the case in an unforeseen direction.`,
        mediaType: 'Movie',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://external-preview.redd.it/QaDOd_b3uwHVUJ0o4j0SiIy-AiSUpGJdxkdReFU-Aao.jpg?width=640&crop=smart&auto=webp&s=88e92eddfdfe9b66a72fe6fd5c589981f23f8337',
        title: 'Ghost In The Shell: SAC_2045',
        creator: 'Masamune Shirow',
        description: `After a global financial crisis, the world is engulfed in an AI-driven war, and it's up to Section 9 to counter new forms of cyber threats.`,
        mediaType: 'TV Series',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_.jpg',
        title: 'Akira',
        creator: 'Katsuhiro Otomo',
        description: `In 1988 the Japanese government drops an atomic bomb on Tokyo after ESP experiments on children go awry. In 2019, 31 years after the nuking of the city, Kaneda, a bike gang leader, tries to save his friend Tetsuo from a secret government project. He battles anti-government activists, greedy politicians, irresponsible scientists and a powerful military leader until Tetsuo's supernatural powers suddenly manifest. A final battle is fought in Tokyo Olympiad exposing the experiment's secrets.`,
        mediaType: 'Movie',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        title: 'Blade Runner',
        creator: 'Ridley Scott',
        description: `Deckard (Harrison Ford) is forced by the police Boss (M. Emmet Walsh) to continue his old job as Replicant Hunter. His assignment: eliminate four escaped Replicants from the colonies who have returned to Earth. Before starting the job, Deckard goes to the Tyrell Corporation and he meets Rachel (Sean Young), a Replicant girl he falls in love with.`,
        mediaType: 'Movie',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg',
        title: 'Blade Runner 2049',
        creator: 'Denis Villeneuve',
        description: `Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years.`,
        mediaType: 'Movie',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'http://nerdist.com/wp-content/uploads/2017/08/Neuromancer-full-cover.jpg',
        title: 'Neuromancer',
        creator: 'William Gibson',
        description: `Case was the sharpest data-thief in the matrix—until he crossed the wrong people and they crippled his nervous system, banishing him from cyberspace. Now a mysterious new employer has recruited him for a last-chance run at an unthinkably powerful artificial intelligence. With a dead man riding shotgun and Molly, a mirror-eyed street-samurai, to watch his back, Case is ready for the adventure that upped the ante on an entire genre of fiction.`,
        mediaType: 'Book',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81mgAHwsHiL.jpg',
        title: 'Count Zero',
        creator: 'William Gibson',
        description: `A corporate mercenary wakes in a reconstructed body, a beautiful woman by his side. Then Hosaka Corporation reactivates him, for a mission more dangerous than the one he’s recovering from: to get a defecting chief of R&D—and the biochip he’s perfected—out intact. But this proves to be of supreme interest to certain other parties—some of whom aren’t remotely human...`,
        mediaType: 'Book',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://www.lwcurrey.com/pictures/2307.jpg?v=1493910685',
        title: 'Mona Lisa Overdrive',
        creator: 'William Gibson',
        description: `Enter Gibson's unique world—lyric and mechanical, sensual and violent, sobering and exciting—where multinational corporations and high tech outlaws vie for power, traveling into the computer-generated universe known as cyberspace.  Into this world comes Mona, a young girl with a murky past and an uncertain future whose life is on a collision course with internationally famous Sense/Net star Angie Mitchell.  Since childhood, Angie has been able to tap into cyberspace without a computer.  Now, from inside cyberspace, a kidnapping plot is masterminded by a phantom entity who has plans for Mona, Angie, and all humanity, plans that cannot be controlled . . . or even known.  And behind the intrigue lurks the shadowy Yazuka, the powerful Japanese underworld, whose leaders ruthlessly manipulate people and events to suit their own purposes . . . or so they think.`,
        mediaType: 'Book',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://www.mobygames.com/images/covers/l/612571-system-shock-2-windows-front-cover.jpg',
        title: 'System Shock 2',
        creator: 'Looking Glass Studios, Irrational Games',
        description: `The game takes place on board a starship in a cyberpunk depiction of 2114. The player assumes the role of a soldier trying to stem the outbreak of a genetic infection that has devastated the ship. Like System Shock, gameplay consists of first-person combat and exploration. It also incorporates role-playing system elements, in which the player can develop skills and traits, such as hacking and psionic abilities.`,
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
