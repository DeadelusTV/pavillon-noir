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
  "L’aventure débute à Saint-Malo en 1715, l’un des grands ports français ouverts sur le commerce maritime et les voyages vers les colonies. C’est là que quatre futurs compagnons se retrouvent liés au même navire marchand, le Saint-Michel, dont le départ pour la Guadeloupe est prévu dans les jours suivants.",

  "Le groupe réunit Solenn Brissac, chirurgienne originaire de Brest ; Baron Bayard, jeune noble envoyé dans la marine ; Anduin Marleau, Nantais rêvant de devenir canonnier ; et Aldry Barat, marin ayant déjà une expérience en mer et spécialisé comme gabier. Ils se connaissent encore peu lorsque le quartier-maître du Saint-Michel leur confie leur première tâche commune : Dorak Mojomeurs, le pilote du navire, est introuvable, alors que le capitaine attend son retour à bord.",

  "Le groupe commence par se rendre chez Dorak. Une voisine leur apprend qu’il n’est pas rentré la nuit précédente et qu’il avait l’habitude de fréquenter L’Ancre ensablée, une importante taverne du port. Sur place, ils découvrent que Dorak y a passé une partie de la soirée à jouer aux cartes avant de repartir seul. Des témoins signalent ensuite une altercation dans la rue, interrompue par la garde.",

  "La piste mène donc aux cachots de Saint-Malo. Dorak y est effectivement détenu, notamment pour duel et port d’arme illicite. Bayard parvient à convaincre le garde de les laisser accéder au prisonnier, et l’armateur du Saint-Michel accepte ensuite de régler sa caution. Dorak est toutefois blessé d’un coup de dague au ventre. Solenn lui prodigue les premiers soins, suffisamment efficacement pour lui permettre de repartir avec le groupe, même si le repos reste conseillé.",

  "Dorak révèle alors que ses ennuis ne se limitent pas à une mauvaise soirée. La veille, il aurait remporté aux cartes une importante somme d’argent, mais surtout un ancien carnet de navigation. Son adversaire, Thomas Nova Brux, un autre pilote, l’aurait accusé de tricher. Plus tard dans la nuit, Dorak aurait été attaqué par plusieurs hommes et dépouillé de son argent, de ses armes et du précieux carnet. Pour lui, ce dernier compte bien davantage que l’argent perdu.",

  "Le carnet aurait appartenu à un navigateur du siècle précédent et contient des informations détaillées sur différentes régions maritimes, notamment des descriptions techniques utiles à la navigation. Le groupe comprend rapidement qu’il s’agit d’un document précieux, même si son contenu est trop spécialisé pour être immédiatement exploitable par eux.",

  "Dorak entraîne alors les quatre compagnons dans une tournée des tavernes à la recherche de Nova Brux. Le trajet se révèle légèrement plus long que prévu, notamment parce que Solenn considère manifestement chaque débit de boisson comme une étape médicale indispensable. Finalement, Dorak reconnaît son adversaire dans une taverne particulièrement animée. La confrontation ne tarde pas.",

  "Dorak attaque Nova Brux, tandis que Bayard tente de régler la situation par l’intimidation. Le calme ne dure guère : une altercation distincte autour d’un verre subtilisé par Solenn finit par précipiter toute la salle dans une bagarre générale. Solenn tente notamment de fracasser un verre sur l’un des clients, rate son geste et termine projetée contre une table, avec une blessure légère.",

  "Profitant du chaos, Aldry détourne l’attention et réussit à subtiliser à Nova Brux le carnet recherché. Bayard prend ensuite le contrôle de la situation par une intimidation particulièrement spectaculaire, suffisamment efficace pour faire reculer les hommes de Nova Brux et calmer pratiquement toute la taverne. Le carnet est récupéré sans qu’aucun membre du groupe n’ait besoin de tuer qui que ce soit, ce qui constitue déjà un bilan étonnamment respectable pour leur première soirée ensemble.",

  "La tension retombée, la soirée se poursuit dans une ambiance bien plus festive. Dorak se montre rapidement sympathique malgré son tempérament de grande gueule et partage avec eux plusieurs histoires de marin. Solenn finit même en meilleurs termes avec Chad et Accra, les deux clients impliqués dans sa petite affaire de bière. Dorak récupère finalement son carnet.",

  "Deux jours passent ensuite sans incident majeur. Puis vient enfin le départ.",

  "Au petit matin, les quatre compagnons découvrent une dernière fois le Saint-Michel depuis le quai avant d’embarquer. Le bâtiment marchand est une flûte d’environ cinquante mètres, avec un équipage approchant la centaine de personnes. Dès les premières manœuvres, chacun prend sa place : Aldry et Anduin participent aux tâches nautiques, Bayard relaie les ordres aux marins, tandis que Solenn dispose de sa propre infirmerie et reste disponible en permanence pour les éventuels blessés.",

  "Ils rencontrent également le capitaine Danny De Pingui, ancien premier lieutenant de la Marine royale, qui a participé financièrement à l’armement du navire. Son expérience militaire laisse présager une discipline particulièrement rigoureuse à bord.",

  "À la fin de la session, le Saint-Michel prend le large. Saint-Malo disparaît derrière eux et l’équipage met le cap vers les Indes occidentales.",

  "L’aventure commence réellement ici."
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
