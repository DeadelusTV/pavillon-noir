// ONGLET ÉQUIPAGE
// Une fiche par personnage joueur.

window.PAVILLON_PERSONNAGES = [
  {
    "id": "solenn-brissac",
    "nom": "Solenn Brissac",
    "surnom": "La Lame de Rhum",
    "role": "Chirurgienne du Saint-Michel",
    "origine": "Brest",
    "age": "Non précisé",
    "resume": "Chirurgienne diplômée aux méthodes peu orthodoxes, grande amatrice de jeu et de spiritueux, toujours accompagnée de son perroquet Ratafia.",
    "histoire": [
      "Solenn est une chirurgienne diplômée de l'école de Brest. Elle évoque un départ mouvementé de l'établissement, lié à une conduite indécente et à un usage immodéré de spiritueux médicinaux.",
      "Malgré cette réputation, ses compétences médicales sont réelles. Elle affirme pouvoir réparer des membres de manière peu orthodoxe et se montre très efficace lorsqu'elle soigne Dorak Mojomeurs.",
      "Elle voyage avec Ratafia, un perroquet nommé d'après un ancien professeur qui la détestait."
    ],
    "traits": [
      "Très compétente en soins",
      "Goût prononcé pour le rhum",
      "Joueuse",
      "Méthodes peu conventionnelles"
    ],
    "competences": [
      "Premiers soins",
      "Chirurgie",
      "Jeu"
    ],
    "relations": [
      {
        "cible": "Dorak Mojomeurs",
        "texte": "Le soigne après sa sortie des cachots puis sympathise avec lui."
      },
      {
        "cible": "Chad et Accra",
        "texte": "Relation d'abord mouvementée autour d'une bière, puis nettement plus amicale."
      }
    ],
    "evolution": [
      {
        "session": "Session 01",
        "texte": "Soigne Dorak Mojomeurs, subit une blessure légère pendant la bagarre et prend ensuite son poste à l'infirmerie du Saint-Michel."
      },
      {
        "session": "Session 02",
        "texte": "Subit le mal de mer mais reste extrêmement efficace pendant la grande tempête, soigne de nombreux blessés et participe ensuite à l’examen du corps de Black Angel."
      }
    ]
  },
  {
    "id": "baron-bayard",
    "nom": "Barron Bayard",
    "nomComplet": "Baron Jean Nicholas Marie de Paladru",
    "role": "Aspirant de marine",
    "origine": "Isère",
    "age": "Non précisé",
    "resume": "Jeune noble turbulent envoyé dans la marine pour apprendre la discipline, tout en rêvant secrètement d'aventure et de liberté.",
    "histoire": [
      "Issu d'une famille noble de l'Isère, Bayard a connu une jeunesse turbulente, bagarreuse et orgueilleuse.",
      "Ses parents l'ont envoyé dans la marine pour lui apprendre la discipline et, peut-être, redorer l'image d'une famille vieillissante.",
      "Sous ce projet très convenable se cache un objectif nettement moins sage : mener une vie d'aventure et de liberté."
    ],
    "traits": [
      "Noble",
      "Orgueilleux",
      "À l'aise socialement",
      "Attiré par l'aventure"
    ],
    "competences": [
      "Persuasion",
      "Intimidation",
      "Connaissances nautiques"
    ],
    "relations": [
      {
        "cible": "Aldry Barrate",
        "texte": "Les deux hommes se connaissent déjà un peu avant le début de la campagne."
      },
      {
        "cible": "Dorak Mojomeurs",
        "texte": "Participe à sa libération et impose son autorité lors de la confrontation avec Nova Brux."
      }
    ],
    "evolution": [
      {
        "session": "Session 01",
        "texte": "Convainc la garde de les laisser voir Dorak, puis impressionne toute une taverne par une intimidation spectaculaire. À bord, il relaie les ordres aux marins."
      },
      {
        "session": "Session 02",
        "texte": "Tente de modérer les sanctions du capitaine, surveille la montée des tensions à bord, participe à l’enquête sur Black Angel et choisit de ne pas dénoncer Darling Sama."
      }
    ]
  },
  {
    "id": "anduin-marleau",
    "nom": "Anduin Marlow",
    "role": "Marin · Aspirant canonnier",
    "origine": "Nantes",
    "age": "17 ans",
    "resume": "Jeune Nantais issu d'une famille pauvre, lecteur passionné d'histoires navales qui rêve de devenir canonnier.",
    "histoire": [
      "Anduin vient de Nantes et d'une famille pauvre, mais il a eu la chance d'apprendre à lire.",
      "Sa mère lui racontait des histoires de navires de guerre, de piraterie et de grandes batailles. Il a ensuite poursuivi cette fascination dans les livres.",
      "Il souhaite être recruté comme canonnier et pense posséder une bonne dextérité pour tout ce qui demande de viser."
    ],
    "traits": [
      "Instruit",
      "Passionné d'histoire navale",
      "Ambitieux",
      "Cache son âge"
    ],
    "competences": [
      "Lecture",
      "Pratique nautique",
      "Aptitudes au tir"
    ],
    "secrets": [
      "Il n'a que 17 ans et ne l'a pas révélé aux autres personnages."
    ],
    "relations": [],
    "evolution": [
      {
        "session": "Session 01",
        "texte": "Participe à la première mission du groupe puis aux manœuvres de départ du Saint-Michel. Il partage la même bordée qu'Aldry et Bayard."
      },
      {
        "session": "Session 02",
        "texte": "Commence à tenir discrètement un journal de la traversée, aide à sécuriser un canon pendant la tempête puis atteint la mâture d’une frégate anglaise avec un boulet chaîné."
      }
    ]
  },
  {
    "id": "aldry-barat",
    "nom": "Aldry Barrate",
    "role": "Gabier",
    "origine": "Non précisée",
    "age": "21 ans",
    "resume": "Marin déjà expérimenté, spécialisé dans les manœuvres des voiles et assez opportuniste pour faire d'une bagarre une excellente diversion.",
    "histoire": [
      "Aldry a déjà servi sur un navire avant le début de la campagne et s'est spécialisé comme gabier, chargé des manœuvres liées aux voiles.",
      "Il connaît déjà un peu Bayard au commencement de l'histoire.",
      "Il ne sait pas lire, détail qui devient douloureusement évident lorsqu'il tente d'examiner le carnet de navigation de Dorak."
    ],
    "traits": [
      "Expérience de la mer",
      "Réactif",
      "Débrouillard",
      "Ne sait pas lire"
    ],
    "competences": [
      "Pratique nautique",
      "Larcin",
      "Adaptabilité"
    ],
    "relations": [
      {
        "cible": "Barron Bayard",
        "texte": "Connaissance antérieure à la campagne."
      },
      {
        "cible": "Dorak Mojomeurs",
        "texte": "Montre un réel intérêt pour son carnet et pour ses connaissances de pilote."
      }
    ],
    "evolution": [
      {
        "session": "Session 01",
        "texte": "Profite de la bagarre générale pour récupérer le carnet sur Nova Brux, puis se distingue favorablement lors des premières manœuvres du Saint-Michel."
      },
      {
        "session": "Session 02",
        "texte": "Commence à apprendre à lire avec Dorak, se distingue pendant la tempête et sauve plusieurs marins lors de l’attaque de la frégate anglaise."
      }
    ]
  }
];
