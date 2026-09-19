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
      },
      {
        "session": "Session 03",
        "texte": "Soigne les survivants du naufrage, identifie un puissant narcotique local pour soulager les blessés les plus graves et finit elle-même par s’en administrer après les soins."
      }
    ]
  },
  {
    "id": "baron-bayard",
    "nom": "Barron Bayard",
    "nomComplet": "Jean-Nicolas Marie de Paladru dit Baron Bayard",
    "role": "Aspirant de marine",
    "origine": "Isère",
    "age": "Non précisé",
    "resume": "Jeune noble turbulent envoyé dans la marine pour apprendre la discipline, tout en rêvant secrètement d'aventure et de liberté.",
    "histoire": [
      "Jean-Nicolas Marie de Paladru dit Baron Bayard, noble savoyard de 24 ans, incarne l’élégance et la prestance de la haute noblesse française du début du XVIIIe siècle. Il mesure environ 1m85, avec une silhouette élancée et gracieuse, sans être excessivement musclé. Son visage est harmonieux, aux traits fins et réguliers, reflétant une beauté classique accentuée par une expression confiante et charismatique."

"Ses cheveux bruns, légèrement ondulés, encadrent un front dégagé – sans perruque, ce qui le distingue des modes de cour les plus strictes – tandis que ses yeux bleus perçants semblent observer le monde avec assurance et ambition. Il porte une tenue richement ornée de velours bleu roi, brodée de fleurs de lys dorées, emblème de sa loyauté à la couronne française. Sa rapière, à la poignée finement ouvragée, est un bijou à elle seule, plus symbole de statut que simple arme."

"Originaire de l'Isère il a passé une jeunesse troublé par ses nombreux écarts de conduites qui lui ont value maintes fois les remontrances de ses précepteurs et de ses parents. Trouvant toujours le bon mot pour se sortir des ennuis il n'avait néanmoins qu'un seul rêve : échapper aux responsabilités d'une vie de noblion. Il parti ainsi pour la côte atlantique afin de faire ses classes dans la marine marchande afin de partir vers le nouveau monde et la liberté."

"Posé devant un port animé, avec la mer et les navires en toile de fond, il incarne à la fois la jeunesse noble, l'assurance d’un homme de rang, et une touche d’indépendance savoyarde."
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
        "cible": "Aldry Baratte",
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
      },
      {
        "session": "Session 03",
        "texte": "Participe activement à l’évacuation du Saint-Michel, gagne la confiance d’une partie des survivants jusqu’à devenir leur chef officieux, puis est blessé au bras gauche lors de l’embuscade dans la forêt."
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
      },
      {
        "session": "Session 03",
        "texte": "Participe à l’organisation du camp puis gagne les hauteurs pour observer l’île. Il repère une colonne de fumée au nord-ouest, révélant que les naufragés ne sont probablement pas seuls."
      }
    ]
  },
  {
    "id": "aldry-barat",
    "nom": "Aldry Baratte",
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
      },
      {
        "session": "Session 03",
        "texte": "Participe à la survie après le naufrage puis se distingue pendant les recherches nocturnes. Il suit les traces des marins disparus, repère un reflet métallique dans la forêt et échappe de justesse à une flèche au début de l’embuscade."
      }
    ]
  }
];
