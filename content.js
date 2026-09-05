window.PAVILLON_DATA = {
  site: {
    saison: "Saison 1",
    intro: "En 1715, quatre compagnons s'apprêtent à quitter Saint-Malo à bord du Saint-Michel, un navire marchand en partance pour la Guadeloupe.",
    situation: "Le Saint-Michel vient de prendre le large. Cap vers les Indes occidentales.",
    note: "Les informations présentées ici reprennent uniquement ce qui a été établi pendant les sessions. Les théories, plaisanteries hors-jeu et teasings restent séparés du canon."
  },

  personnages: [
    {
      id: "solenn-brissac",
      nom: "Solenn Brissac",
      surnom: "La Lame de Rhum",
      role: "Chirurgienne du Saint-Michel",
      origine: "Brest",
      age: "Non précisé",
      resume: "Chirurgienne diplômée aux méthodes peu orthodoxes, grande amatrice de jeu et de spiritueux, toujours accompagnée de son perroquet Ratafia.",
      histoire: [
        "Solenn est une chirurgienne diplômée de l'école de Brest. Elle évoque un départ mouvementé de l'établissement, lié à une conduite indécente et à un usage immodéré de spiritueux médicinaux.",
        "Malgré cette réputation, ses compétences médicales sont réelles. Elle affirme pouvoir réparer des membres de manière peu orthodoxe et se montre très efficace lorsqu'elle soigne Dorak Mojomeurs.",
        "Elle voyage avec Ratafia, un perroquet nommé d'après un ancien professeur qui la détestait."
      ],
      traits: ["Très compétente en soins", "Goût prononcé pour le rhum", "Joueuse", "Méthodes peu conventionnelles"],
      competences: ["Premiers soins", "Chirurgie", "Jeu"],
      relations: [
        { cible: "Dorak Mojomeurs", texte: "Le soigne après sa sortie des cachots puis sympathise avec lui." },
        { cible: "Chad et Accra", texte: "Relation d'abord mouvementée autour d'une bière, puis nettement plus amicale." }
      ],
      evolution: [
        { session: "Session 01", texte: "Soigne Dorak Mojomeurs, subit une blessure légère pendant la bagarre et prend ensuite son poste à l'infirmerie du Saint-Michel." }
      ]
    },
    {
      id: "baron-bayard",
      nom: "Baron Bayard",
      nomComplet: "Baron Jean Nicholas Marie de Paladru",
      role: "Aspirant de marine",
      origine: "Isère",
      age: "Non précisé",
      resume: "Jeune noble turbulent envoyé dans la marine pour apprendre la discipline, tout en rêvant secrètement d'aventure et de liberté.",
      histoire: [
        "Issu d'une famille noble de l'Isère, Bayard a connu une jeunesse turbulente, bagarreuse et orgueilleuse.",
        "Ses parents l'ont envoyé dans la marine pour lui apprendre la discipline et, peut-être, redorer l'image d'une famille vieillissante.",
        "Sous ce projet très convenable se cache un objectif nettement moins sage : mener une vie d'aventure et de liberté."
      ],
      traits: ["Noble", "Orgueilleux", "À l'aise socialement", "Attiré par l'aventure"],
      competences: ["Persuasion", "Intimidation", "Connaissances nautiques"],
      relations: [
        { cible: "Aldry Barat", texte: "Les deux hommes se connaissent déjà un peu avant le début de la campagne." },
        { cible: "Dorak Mojomeurs", texte: "Participe à sa libération et impose son autorité lors de la confrontation avec Nova Brux." }
      ],
      evolution: [
        { session: "Session 01", texte: "Convainc la garde de les laisser voir Dorak, puis impressionne toute une taverne par une intimidation spectaculaire. À bord, il relaie les ordres aux marins." }
      ]
    },
    {
      id: "anduin-marleau",
      nom: "Anduin Marleau",
      role: "Marin · Aspirant canonnier",
      origine: "Nantes",
      age: "17 ans",
      resume: "Jeune Nantais issu d'une famille pauvre, lecteur passionné d'histoires navales qui rêve de devenir canonnier.",
      histoire: [
        "Anduin vient de Nantes et d'une famille pauvre, mais il a eu la chance d'apprendre à lire.",
        "Sa mère lui racontait des histoires de navires de guerre, de piraterie et de grandes batailles. Il a ensuite poursuivi cette fascination dans les livres.",
        "Il souhaite être recruté comme canonnier et pense posséder une bonne dextérité pour tout ce qui demande de viser."
      ],
      traits: ["Instruit", "Passionné d'histoire navale", "Ambitieux", "Cache son âge"],
      competences: ["Lecture", "Pratique nautique", "Aptitudes au tir"],
      secrets: ["Il n'a que 17 ans et ne l'a pas révélé aux autres personnages."],
      relations: [],
      evolution: [
        { session: "Session 01", texte: "Participe à la première mission du groupe puis aux manœuvres de départ du Saint-Michel. Il partage la même bordée qu'Aldry et Bayard." }
      ]
    },
    {
      id: "aldry-barat",
      nom: "Aldry Barat",
      role: "Gabier",
      origine: "Non précisée",
      age: "21 ans",
      resume: "Marin déjà expérimenté, spécialisé dans les manœuvres des voiles et assez opportuniste pour faire d'une bagarre une excellente diversion.",
      histoire: [
        "Aldry a déjà servi sur un navire avant le début de la campagne et s'est spécialisé comme gabier, chargé des manœuvres liées aux voiles.",
        "Il connaît déjà un peu Bayard au commencement de l'histoire.",
        "Il ne sait pas lire, détail qui devient douloureusement évident lorsqu'il tente d'examiner le carnet de navigation de Dorak."
      ],
      traits: ["Expérience de la mer", "Réactif", "Débrouillard", "Ne sait pas lire"],
      competences: ["Pratique nautique", "Larcin", "Adaptabilité"],
      relations: [
        { cible: "Baron Bayard", texte: "Connaissance antérieure à la campagne." },
        { cible: "Dorak Mojomeurs", texte: "Montre un réel intérêt pour son carnet et pour ses connaissances de pilote." }
      ],
      evolution: [
        { session: "Session 01", texte: "Profite de la bagarre générale pour récupérer le carnet sur Nova Brux, puis se distingue favorablement lors des premières manœuvres du Saint-Michel." }
      ]
    }
  ],

  pnj: [
    {
      id: "dorak-mojomeurs",
      nom: "Dorak Mojomeurs",
      role: "Pilote du Saint-Michel",
      categorie: "Équipage",
      premiere: "Session 01",
      origineNom: "Nom issu d'un abonné de DeadelusTV",
      resume: "Ancien corsaire, joueur invétéré et marin expérimenté des Indes occidentales. Grande gueule sympathique et surtout pilote indispensable au Saint-Michel.",
      faits: [
        "Introuvable au début de la campagne, il est finalement retrouvé dans les cachots de Saint-Malo.",
        "Il a été blessé d'un coup de dague et est soigné par Solenn.",
        "Un ancien carnet de navigation lui a été volé après une partie de cartes.",
        "Le groupe l'aide à récupérer le carnet avant le départ du Saint-Michel."
      ]
    },
    {
      id: "thomas-nova-brux",
      nom: "Thomas Nova Brux",
      role: "Pilote · Rival de Dorak",
      categorie: "Adversaire",
      premiere: "Session 01",
      origineNom: "Nom issu d'un abonné de DeadelusTV",
      nomIncertain: true,
      resume: "Autre pilote rencontré à Saint-Malo. Après avoir accusé Dorak de tricher aux cartes, il se retrouve au centre de l'affaire du carnet volé.",
      faits: [
        "Dorak affirme l'avoir battu aux cartes.",
        "Il est retrouvé dans une taverne entouré de plusieurs hommes.",
        "Aldry récupère sur lui le carnet recherché pendant la bagarre générale."
      ]
    },
    {
      id: "danny-de-pingui",
      nom: "Danny De Pingui",
      role: "Capitaine du Saint-Michel",
      categorie: "Équipage",
      premiere: "Session 01",
      origineNom: "Nom issu d'un abonné de DeadelusTV",
      resume: "Ancien premier lieutenant de la Marine royale, désormais capitaine marchand. Il a participé financièrement à l'armement du Saint-Michel et conserve une discipline très militaire.",
      faits: [
        "Ancien premier lieutenant de la Marine royale.",
        "A participé financièrement à l'armement du Saint-Michel.",
        "Sa réputation laisse prévoir une organisation particulièrement rigoureuse à bord."
      ]
    },
    {
      id: "chad",
      nom: "Chad",
      role: "Client de taverne",
      categorie: "Rencontre",
      premiere: "Session 01",
      origineNom: "Abonné de DeadelusTV · identité exacte à confirmer",
      resume: "L'un des deux clients impliqués dans l'affaire de la bière de Solenn pendant la bagarre générale.",
      faits: ["La rencontre commence assez mal.", "La soirée se termine pourtant sur de bien meilleurs termes avec Solenn."]
    },
    {
      id: "accra",
      nom: "Accra",
      role: "Client de taverne",
      categorie: "Rencontre",
      premiere: "Session 01",
      origineNom: "Abonné de DeadelusTV · identité exacte à confirmer",
      resume: "L'un des deux clients impliqués dans l'affaire de la bière de Solenn pendant la bagarre générale.",
      faits: ["Participe au chaos de la taverne.", "La soirée se termine pourtant sur de bien meilleurs termes avec Solenn."]
    }
  ],

  lore: [
    {
      id: "saint-malo",
      categorie: "Lieux",
      titre: "Saint-Malo",
      sousTitre: "France · 1715 · Point de départ de l'aventure",
      image: "assets/saint-malo-session-01.png",
      imageAlt: "Illustration de Saint-Malo utilisée pendant la première session",
      resume: "Grand port maritime français d'où débute la campagne. Le groupe y recherche Dorak avant le départ du Saint-Michel.",
      details: [
        "Le MJ présente Saint-Malo comme l'un des principaux ports français ouverts sur le commerce, les colonies et les grandes routes maritimes.",
        "C'est ici que les quatre personnages sont réunis autour du Saint-Michel et accomplissent leur première mission commune."
      ]
    },
    {
      id: "saint-michel",
      categorie: "Navires",
      titre: "Le Saint-Michel",
      sousTitre: "Flûte marchande · Destination initiale : Guadeloupe",
      resume: "Navire marchand sur lequel embarquent les quatre personnages à la fin de la Session 01.",
      details: [
        "Le Saint-Michel est décrit comme une flûte d'environ cinquante mètres, gréée de voiles carrées.",
        "Son équipage approche la centaine de personnes et le bâtiment dispose de plusieurs canons, avec une organisation par bordées.",
        "Danny De Pingui en est le capitaine et Dorak Mojomeurs le pilote."
      ]
    },
    {
      id: "vie-maritime",
      categorie: "Vie maritime",
      titre: "Vie à bord et bordées",
      sousTitre: "Organisation du Saint-Michel",
      resume: "La vie à bord est organisée en équipes alternées afin que le navire puisse fonctionner sans interruption.",
      details: [
        "Anduin, Aldry et Bayard appartiennent à la même bordée.",
        "Les hamacs sont partagés entre des marins de bordées différentes : pendant que l'un travaille, l'autre dort.",
        "Solenn ne dépend pas d'une bordée précise. En tant que chirurgienne, elle reste disponible lorsqu'on a besoin d'elle."
      ]
    },
    {
      id: "contexte-1715",
      categorie: "Contexte",
      titre: "France, 1715",
      sousTitre: "Une paix toute relative",
      resume: "La campagne commence en France en 1715, dans un contexte maritime tourné vers les colonies et les Indes occidentales.",
      details: [
        "La France n'est officiellement pas en guerre avec l'Angleterre au moment du départ.",
        "Le Saint-Michel doit rejoindre la Guadeloupe, dans les Indes occidentales."
      ]
    },
    {
      id: "carnet-dorak",
      categorie: "Objets & mystères",
      titre: "Le carnet de Dorak",
      sousTitre: "Ancien carnet de navigation",
      resume: "Un document ancien contenant des informations techniques très précises sur différentes zones maritimes.",
      details: [
        "Dorak affirme l'avoir gagné aux cartes avec une importante somme d'argent.",
        "Le carnet contient des descriptions de hauts-fonds, de zones maritimes et d'autres indications techniques difficiles à interpréter sans connaissances spécialisées.",
        "Son importance réelle pour la suite de l'aventure reste inconnue."
      ]
    },
    {
      id: "superstitions",
      categorie: "Vie maritime",
      titre: "Superstitions de marins",
      sousTitre: "Les mots qu'on évite à bord",
      resume: "Le mot « bateau » est présenté comme portant malheur sur un navire.",
      details: [
        "Le MJ indique que d'autres mots et superstitions seront découverts au fil de la campagne.",
        "Pour l'instant, mieux vaut dire navire ou bâtiment. L'équipage semble préférer les coups de malchance aux débats linguistiques."
      ]
    }
  ],

  sessions: [
    {
      id: "session-01",
      numero: "Session 01",
      saison: "Saison 1",
      titre: "Le premier départ",
      date: "",
      image: "assets/saint-malo-session-01.png",
      imageAlt: "Illustration de Saint-Malo utilisée pendant la Session 01",
      imageFin: "assets/depart-saint-michel-session-01.png",
      imageFinAlt: "Illustration portuaire utilisée au moment du départ du Saint-Michel",
      resumeCourt: "À quelques jours du départ du Saint-Michel pour la Guadeloupe, Solenn Brissac, Baron Bayard, Anduin Marleau et Aldry Barat sont chargés de retrouver Dorak Mojomeurs, le pilote du navire, disparu depuis la veille. Leur recherche les mène de tavernes en cachots, puis au cœur d'une bagarre générale pour récupérer un mystérieux carnet de navigation.",
      resumeDetaille: [
        "L'aventure débute à Saint-Malo en 1715. Solenn Brissac, Baron Bayard, Anduin Marleau et Aldry Barat se retrouvent liés au même navire marchand, le Saint-Michel, dont le départ pour la Guadeloupe est prévu dans les jours suivants.",
        "Leur première mission commune paraît simple : Dorak Mojomeurs, le pilote du navire, est introuvable. Une voisine les oriente vers L'Ancre ensablée, où Dorak a passé la soirée à jouer aux cartes avant de repartir seul. Des témoins évoquent ensuite une altercation dans la rue et l'intervention de la garde.",
        "Le groupe retrouve finalement Dorak dans les cachots de Saint-Malo. Bayard convainc les gardes de les laisser le voir, puis l'armateur règle sa caution. Blessé d'un coup de dague au ventre, Dorak reçoit les soins de Solenn.",
        "Dorak révèle alors qu'un ancien carnet de navigation lui a été dérobé. Il l'aurait remporté aux cartes face à Thomas Nova Brux, un autre pilote qui l'accusait de tricher. Pour Dorak, le carnet vaut davantage que l'argent également volé.",
        "Le groupe accompagne Dorak de taverne en taverne jusqu'à retrouver Nova Brux. La confrontation dégénère rapidement. Une querelle parallèle autour d'une bière subtilisée par Solenn finit de transformer la salle en bagarre générale.",
        "Pendant le chaos, Aldry détourne l'attention et récupère le carnet sur Nova Brux. Bayard impose ensuite son autorité à toute la salle par une intimidation spectaculaire, ce qui permet au groupe de sortir de la situation sans tuer personne.",
        "La soirée se termine de manière beaucoup plus amicale. Dorak récupère son carnet et sympathise avec le groupe. Deux jours plus tard, le Saint-Michel quitte enfin Saint-Malo. Chacun prend son poste à bord et le navire met le cap vers les Indes occidentales."
      ],
      evenements: [
        "Formation du groupe autour du Saint-Michel",
        "Disparition puis recherche de Dorak Mojomeurs",
        "Découverte de son arrestation dans les cachots",
        "Révélation du vol du carnet de navigation",
        "Confrontation avec Thomas Nova Brux",
        "Bagarre générale dans la taverne",
        "Récupération du carnet par Aldry",
        "Départ du Saint-Michel vers la Guadeloupe"
      ],
      personnages: ["solenn-brissac", "baron-bayard", "anduin-marleau", "aldry-barat"],
      pnj: ["dorak-mojomeurs", "thomas-nova-brux", "danny-de-pingui", "chad", "accra"],
      lore: ["saint-malo", "saint-michel", "vie-maritime", "contexte-1715", "carnet-dorak", "superstitions"],
      coulisses: [
        "Le public a choisi la bagarre générale lors d'un sondage. L'autre possibilité était qu'une personne en ait personnellement après l'un des héros.",
        "Les joueurs n'étaient pas censés consulter le chat afin que les votes puissent réellement les surprendre."
      ]
    }
  ],

  chronologie: [
    {
      annee: "1715",
      titre: "Saint-Malo",
      texte: "Début de l'aventure. Les quatre personnages sont réunis autour du Saint-Michel.",
      image: "assets/saint-malo-session-01.png",
      lien: "#session-01"
    },
    {
      annee: "1715",
      titre: "Le pilote a disparu",
      texte: "Le quartier-maître charge le groupe de retrouver Dorak Mojomeurs avant le départ.",
      lien: "#session-01"
    },
    {
      annee: "1715",
      titre: "De L'Ancre ensablée aux cachots",
      texte: "Les indices mènent le groupe jusqu'à Dorak, arrêté après une altercation nocturne.",
      lien: "#session-01"
    },
    {
      annee: "1715",
      titre: "L'affaire du carnet",
      texte: "Dorak révèle le vol d'un ancien carnet de navigation et entraîne le groupe sur la piste de Thomas Nova Brux.",
      lien: "#lore-carnet-dorak"
    },
    {
      annee: "1715",
      titre: "Bagarre générale",
      texte: "La confrontation dégénère. Aldry récupère le carnet pendant que Bayard finit par imposer le calme.",
      lien: "#session-01"
    },
    {
      annee: "1715",
      titre: "Départ du Saint-Michel",
      texte: "Deux jours plus tard, l'équipage quitte Saint-Malo et met le cap vers la Guadeloupe.",
      image: "assets/depart-saint-michel-session-01.png",
      imageCrop: true,
      lien: "#lore-saint-michel"
    }
  ],

  coulisses: {
    principes: [
      {
        titre: "Le public influence l'aventure",
        texte: "Certains événements sont soumis au vote du chat. Les joueurs ne consultent pas les résultats afin de conserver la surprise."
      },
      {
        titre: "Les abonnés deviennent des PNJ",
        texte: "Les PNJ fictifs prennent les noms ou pseudos d'abonnés de DeadelusTV. Les personnages historiques conservent leur identité réelle."
      },
      {
        titre: "Canon et coulisses restent séparés",
        texte: "Une hypothèse de joueur, une plaisanterie ou un teasing du MJ n'est pas traité comme une vérité du monde tant qu'il n'est pas établi en jeu."
      }
    ],
    votes: [
      {
        session: "Session 01",
        question: "Quelle péripétie doit survenir ?",
        gagnant: "Bagarre générale dans la taverne",
        autre: "Quelqu'un en veut personnellement à l'un des héros",
        consequence: "Le MJ intègre le résultat à la scène de la taverne et utilise la querelle de Solenn autour d'une bière comme déclencheur du chaos."
      }
    ],
    illustrations: [
      {
        titre: "Saint-Malo",
        image: "assets/saint-malo-session-01.png",
        legende: "Illustration utilisée pendant la Session 01."
      },
      {
        titre: "Le départ",
        image: "assets/depart-saint-michel-session-01.png",
        imageCrop: true,
        legende: "Illustration utilisée au moment du départ du Saint-Michel."
      }
    ]
  }
};
