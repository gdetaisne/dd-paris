/**
 * Données centralisées par ville pour Moverz
 * Source unique de vérité pour métadonnées, schema.org, sitemaps, etc.
 */

export interface CityData {
  slug: string;
  name: string;
  nameCapitalized: string;
  region: string;
  siteUrl: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  areaServed: string[]; // Villes environnantes couvertes
  neighborhoods: Array<{
    slug: string;
    name: string;
  }>;
  corridors: Array<{
    slug: string;
    destination: string;
  }>;
}

export const cityData: Record<string, CityData> = {
  marseille: {
    slug: 'marseille',
    name: 'Marseille',
    nameCapitalized: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    siteUrl: 'https://devis-demenageur-marseille.fr',
    coordinates: {
      latitude: 43.2965,
      longitude: 5.3698
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Marseille', 'Aix-en-Provence', 'Aubagne', 'Martigues'],
    neighborhoods: [
      { slug: 'vieux-port', name: 'Vieux-Port' },
      { slug: 'panier', name: 'Le Panier' },
      { slug: 'joliette', name: 'Joliette' },
      { slug: 'endoume', name: 'Endoume' },
      { slug: 'plaine', name: 'La Plaine' }
    ],
    corridors: [
      { slug: 'marseille-vers-paris', destination: 'Paris' },
      { slug: 'marseille-vers-lyon', destination: 'Lyon' },
      { slug: 'marseille-vers-toulouse', destination: 'Toulouse' },
      { slug: 'marseille-vers-nantes', destination: 'Nantes' },
      { slug: 'marseille-vers-espagne', destination: 'Espagne' }
    ]
  },
  
  toulouse: {
    slug: 'toulouse',
    name: 'Toulouse',
    nameCapitalized: 'Toulouse',
    region: 'Occitanie',
    siteUrl: 'https://devis-demenageur-toulousain.fr',
    coordinates: {
      latitude: 43.6047,
      longitude: 1.4442
    },
    phone: '+33-5-XX-XX-XX-XX',
    areaServed: ['Toulouse', 'Blagnac', 'Colomiers', 'Tournefeuille'],
    neighborhoods: [
      { slug: 'capitole', name: 'Capitole' },
      { slug: 'saint-cyprien', name: 'Saint-Cyprien' },
      { slug: 'carmes', name: 'Carmes' },
      { slug: 'compans', name: 'Compans' },
      { slug: 'jean-jaures', name: 'Jean-Jaurès' }
    ],
    corridors: [
      { slug: 'toulouse-vers-paris', destination: 'Paris' },
      { slug: 'toulouse-vers-lyon', destination: 'Lyon' },
      { slug: 'toulouse-vers-marseille', destination: 'Marseille' },
      { slug: 'toulouse-vers-nantes', destination: 'Nantes' },
      { slug: 'toulouse-vers-espagne', destination: 'Espagne' }
    ]
  },
  
  lyon: {
    slug: 'lyon',
    name: 'Lyon',
    nameCapitalized: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    siteUrl: 'https://devis-demenageur-lyon.fr',
    coordinates: {
      latitude: 45.7640,
      longitude: 4.8357
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Lyon', 'Villeurbanne', 'Vénissieux', 'Caluire-et-Cuire'],
    neighborhoods: [
      { slug: 'presquile', name: 'Presqu\'île' },
      { slug: 'vieux-lyon', name: 'Vieux Lyon' },
      { slug: 'part-dieu', name: 'Part-Dieu' },
      { slug: 'croix-rousse', name: 'Croix-Rousse' },
      { slug: 'confluence', name: 'Confluence' }
    ],
    corridors: [
      { slug: 'lyon-vers-paris', destination: 'Paris' },
      { slug: 'lyon-vers-marseille', destination: 'Marseille' },
      { slug: 'lyon-vers-toulouse', destination: 'Toulouse' },
      { slug: 'lyon-vers-geneve', destination: 'Genève' },
      { slug: 'lyon-vers-grenoble', destination: 'Grenoble' }
    ]
  },
  
  bordeaux: {
    slug: 'bordeaux',
    name: 'Bordeaux',
    nameCapitalized: 'Bordeaux',
    region: 'Nouvelle-Aquitaine',
    siteUrl: 'https://www.bordeaux-demenageur.fr',
    coordinates: {
      latitude: 44.8378,
      longitude: -0.5792
    },
    phone: '+33-5-XX-XX-XX-XX',
    areaServed: ['Bordeaux', 'Mérignac', 'Pessac', 'Talence'],
    neighborhoods: [
      { slug: 'chartrons', name: 'Chartrons' },
      { slug: 'saint-pierre', name: 'Saint-Pierre' },
      { slug: 'bastide', name: 'Bastide' },
      { slug: 'cauderan', name: 'Caudéran' },
      { slug: 'merignac', name: 'Mérignac' },
      { slug: 'pessac', name: 'Pessac' }
    ],
    corridors: [
      { slug: 'bordeaux-vers-paris', destination: 'Paris' },
      { slug: 'bordeaux-vers-toulouse', destination: 'Toulouse' },
      { slug: 'bordeaux-vers-lyon', destination: 'Lyon' },
      { slug: 'bordeaux-vers-nantes', destination: 'Nantes' },
      { slug: 'bordeaux-vers-espagne', destination: 'Espagne' }
    ]
  },
  
  nantes: {
    slug: 'nantes',
    name: 'Nantes',
    nameCapitalized: 'Nantes',
    region: 'Pays de la Loire',
    siteUrl: 'https://devis-demenageur-nantes.fr',
    coordinates: {
      latitude: 47.2184,
      longitude: -1.5536
    },
    phone: '+33-2-XX-XX-XX-XX',
    areaServed: ['Nantes', 'Rezé', 'Saint-Herblain', 'Saint-Nazaire'],
    neighborhoods: [
      { slug: 'bouffay', name: 'Bouffay' },
      { slug: 'ile-de-nantes', name: 'Île de Nantes' },
      { slug: 'doulon', name: 'Doulon' },
      { slug: 'beaujoire', name: 'Beaujoire' },
      { slug: 'hauts-paves', name: 'Hauts-Pavés' }
    ],
    corridors: [
      { slug: 'nantes-vers-paris', destination: 'Paris' },
      { slug: 'nantes-vers-bordeaux', destination: 'Bordeaux' },
      { slug: 'nantes-vers-rennes', destination: 'Rennes' },
      { slug: 'nantes-vers-lyon', destination: 'Lyon' },
      { slug: 'nantes-vers-la-baule', destination: 'La Baule' }
    ]
  },
  
  lille: {
    slug: 'lille',
    name: 'Lille',
    nameCapitalized: 'Lille',
    region: 'Hauts-de-France',
    siteUrl: 'https://devis-demenageur-lille.fr',
    coordinates: {
      latitude: 50.6292,
      longitude: 3.0573
    },
    phone: '+33-3-XX-XX-XX-XX',
    areaServed: ['Lille', 'Roubaix', 'Tourcoing', 'Villeneuve-d\'Ascq'],
    neighborhoods: [
      { slug: 'vieux-lille', name: 'Vieux-Lille' },
      { slug: 'wazemmes', name: 'Wazemmes' },
      { slug: 'republique', name: 'République' },
      { slug: 'fives', name: 'Fives' },
      { slug: 'vauban', name: 'Vauban' }
    ],
    corridors: [
      { slug: 'lille-vers-paris', destination: 'Paris' },
      { slug: 'lille-vers-bruxelles', destination: 'Bruxelles' },
      { slug: 'lille-vers-lyon', destination: 'Lyon' },
      { slug: 'lille-vers-londres', destination: 'Londres' },
      { slug: 'lille-vers-gand', destination: 'Gand' }
    ]
  },
  
  nice: {
    slug: 'nice',
    name: 'Nice',
    nameCapitalized: 'Nice',
    region: 'Provence-Alpes-Côte d\'Azur',
    siteUrl: 'https://devis-demenageur-nice.fr',
    coordinates: {
      latitude: 43.7102,
      longitude: 7.2620
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Nice', 'Cannes', 'Antibes', 'Menton'],
    neighborhoods: [
      { slug: 'vieux-nice', name: 'Vieux-Nice' },
      { slug: 'port', name: 'Port' },
      { slug: 'liberation', name: 'Libération' },
      { slug: 'cimiez', name: 'Cimiez' },
      { slug: 'riquier', name: 'Riquier' }
    ],
    corridors: [
      { slug: 'nice-vers-paris', destination: 'Paris' },
      { slug: 'nice-vers-marseille', destination: 'Marseille' },
      { slug: 'nice-vers-lyon', destination: 'Lyon' },
      { slug: 'nice-vers-italie', destination: 'Italie' },
      { slug: 'nice-vers-monaco', destination: 'Monaco' }
    ]
  },
  
  rennes: {
    slug: 'rennes',
    name: 'Rennes',
    nameCapitalized: 'Rennes',
    region: 'Bretagne',
    siteUrl: 'https://devis-demenageur-rennes.fr',
    coordinates: {
      latitude: 48.1173,
      longitude: -1.6778
    },
    phone: '+33-2-XX-XX-XX-XX',
    areaServed: ['Rennes', 'Saint-Grégoire', 'Cesson-Sévigné', 'Chantepie'],
    neighborhoods: [
      { slug: 'centre', name: 'Centre' },
      { slug: 'thabor', name: 'Thabor' },
      { slug: 'maurepas', name: 'Maurepas' },
      { slug: 'villejean', name: 'Villejean' },
      { slug: 'cleunay', name: 'Cleunay' }
    ],
    corridors: [
      { slug: 'rennes-vers-paris', destination: 'Paris' },
      { slug: 'rennes-vers-nantes', destination: 'Nantes' },
      { slug: 'rennes-vers-brest', destination: 'Brest' },
      { slug: 'rennes-vers-saint-malo', destination: 'Saint-Malo' },
      { slug: 'rennes-vers-angers', destination: 'Angers' }
    ]
  },
  
  rouen: {
    slug: 'rouen',
    name: 'Rouen',
    nameCapitalized: 'Rouen',
    region: 'Normandie',
    siteUrl: 'https://devis-demenageur-rouen.fr',
    coordinates: {
      latitude: 49.4432,
      longitude: 1.0993
    },
    phone: '+33-2-XX-XX-XX-XX',
    areaServed: ['Rouen', 'Mont-Saint-Aignan', 'Sotteville-lès-Rouen', 'Le Havre'],
    neighborhoods: [
      { slug: 'centre-historique', name: 'Centre Historique' },
      { slug: 'saint-sever', name: 'Saint-Sever' },
      { slug: 'grammont', name: 'Grammont' },
      { slug: 'sapins', name: 'Sapins' },
      { slug: 'madrillet', name: 'Madrillet' }
    ],
    corridors: [
      { slug: 'rouen-vers-paris', destination: 'Paris' },
      { slug: 'rouen-vers-le-havre', destination: 'Le Havre' },
      { slug: 'rouen-vers-caen', destination: 'Caen' },
      { slug: 'rouen-vers-amiens', destination: 'Amiens' },
      { slug: 'rouen-vers-lille', destination: 'Lille' }
    ]
  },
  
  strasbourg: {
    slug: 'strasbourg',
    name: 'Strasbourg',
    nameCapitalized: 'Strasbourg',
    region: 'Grand Est',
    siteUrl: 'https://devis-demenageur-strasbourg.fr',
    coordinates: {
      latitude: 48.5734,
      longitude: 7.7521
    },
    phone: '+33-3-XX-XX-XX-XX',
    areaServed: ['Strasbourg', 'Schiltigheim', 'Illkirch-Graffenstaden', 'Haguenau'],
    neighborhoods: [
      { slug: 'grande-ile', name: 'Grande-Île' },
      { slug: 'neudorf', name: 'Neudorf' },
      { slug: 'cronenbourg', name: 'Cronenbourg' },
      { slug: 'koenigshoffen', name: 'Koenigshoffen' },
      { slug: 'robertsau', name: 'Robertsau' }
    ],
    corridors: [
      { slug: 'strasbourg-vers-paris', destination: 'Paris' },
      { slug: 'strasbourg-vers-lyon', destination: 'Lyon' },
      { slug: 'strasbourg-vers-mulhouse', destination: 'Mulhouse' },
      { slug: 'strasbourg-vers-allemagne', destination: 'Allemagne' },
      { slug: 'strasbourg-vers-suisse', destination: 'Suisse' }
    ]
  },
  
  montpellier: {
    slug: 'montpellier',
    name: 'Montpellier',
    nameCapitalized: 'Montpellier',
    region: 'Occitanie',
    siteUrl: 'https://devis-demenageur-montpellier.fr',
    coordinates: {
      latitude: 43.6108,
      longitude: 3.8767
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Montpellier', 'Lattes', 'Castelnau-le-Lez', 'Béziers'],
    neighborhoods: [
      { slug: 'ecusson', name: 'Écusson' },
      { slug: 'antigone', name: 'Antigone' },
      { slug: 'pres-arenes', name: 'Près d\'Arènes' },
      { slug: 'beaux-arts', name: 'Beaux-Arts' },
      { slug: 'port-marianne', name: 'Port-Marianne' }
    ],
    corridors: [
      { slug: 'montpellier-vers-paris', destination: 'Paris' },
      { slug: 'montpellier-vers-toulouse', destination: 'Toulouse' },
      { slug: 'montpellier-vers-marseille', destination: 'Marseille' },
      { slug: 'montpellier-vers-lyon', destination: 'Lyon' },
      { slug: 'montpellier-vers-espagne', destination: 'Espagne' }
    ]
  },

  paris: {
    slug: 'paris',
    name: 'Paris',
    nameCapitalized: 'Paris',
    region: 'Île-de-France',
    siteUrl: 'https://devis-demenageur-parisien.fr',
    coordinates: {
      latitude: 48.8566,
      longitude: 2.3522
    },
    phone: '+33-1-XX-XX-XX-XX',
    areaServed: ['Paris 1er-20e', 'Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Saint-Denis'],
    neighborhoods: [
      { slug: 'paris-1er-louvre', name: 'Paris 1er – Louvre' },
      { slug: 'paris-2e-bourse', name: 'Paris 2e – Bourse' },
      { slug: 'paris-3e-marais', name: 'Paris 3e – Le Marais' },
      { slug: 'paris-4e-hotel-de-ville', name: 'Paris 4e – Hôtel-de-Ville' },
      { slug: 'paris-5e-quartier-latin', name: 'Paris 5e – Quartier Latin' },
      { slug: 'paris-6e-saint-germain', name: 'Paris 6e – Saint‑Germain‑des‑Prés' },
      { slug: 'paris-7e-invalides-eiffel', name: 'Paris 7e – Invalides / Tour Eiffel' },
      { slug: 'paris-8e-champs-elysees', name: 'Paris 8e – Champs‑Élysées' },
      { slug: 'paris-9e-opera', name: 'Paris 9e – Opéra / Grands Boulevards' },
      { slug: 'paris-10e-canal-saint-martin', name: 'Paris 10e – Canal Saint‑Martin' },
      { slug: 'paris-11e-bastille-oberkampf', name: 'Paris 11e – Bastille / Oberkampf' },
      { slug: 'paris-12e-bercy-gare-de-lyon', name: 'Paris 12e – Bercy / Gare de Lyon' },
      { slug: 'paris-13e-buttes-aux-cailles', name: 'Paris 13e – Butte‑aux‑Cailles' },
      { slug: 'paris-14e-montparnasse', name: 'Paris 14e – Montparnasse / Alésia' },
      { slug: 'paris-15e-vaugirard', name: 'Paris 15e – Vaugirard / Convention' },
      { slug: 'paris-16e-passy-auteuil', name: 'Paris 16e – Passy / Auteuil' },
      { slug: 'paris-17e-batignolles', name: 'Paris 17e – Batignolles / Ternes' },
      { slug: 'paris-18e-montmartre', name: 'Paris 18e – Montmartre / Clignancourt' },
      { slug: 'paris-19e-buttes-chaumont', name: 'Paris 19e – Buttes‑Chaumont / La Villette' },
      { slug: 'paris-20e-belleville-menilmontant', name: 'Paris 20e – Belleville / Ménilmontant' }
    ],
    corridors: [
      { slug: 'paris-vers-lyon', destination: 'Lyon' },
      { slug: 'paris-vers-marseille', destination: 'Marseille' },
      { slug: 'paris-vers-bordeaux', destination: 'Bordeaux' },
      { slug: 'paris-vers-lille', destination: 'Lille' },
      { slug: 'paris-vers-international', destination: 'International' }
    ]
  },

  'ile-de-france': {
    slug: 'ile-de-france',
    name: 'Île-de-France',
    nameCapitalized: 'Île-de-France',
    region: 'Île-de-France',
    siteUrl: 'https://devis-demenageur-ile-de-france.fr',
    coordinates: {
      latitude: 48.8499,
      longitude: 2.637
    },
    phone: '+33-1-XX-XX-XX-XX',
    areaServed: [
      'Paris',
      'Boulogne-Billancourt',
      'Saint-Denis',
      'Versailles',
      'Créteil',
      'Nanterre',
      'Evry-Courcouronnes'
    ],
    neighborhoods: [
      { slug: 'la-defense', name: 'La Défense' },
      { slug: 'boulogne-billancourt', name: 'Boulogne-Billancourt' },
      { slug: 'saint-denis', name: 'Saint-Denis' },
      { slug: 'montreuil', name: 'Montreuil' },
      { slug: 'creteil', name: 'Créteil' },
      { slug: 'versailles', name: 'Versailles' },
      { slug: 'nanterre', name: 'Nanterre' },
      { slug: 'courbevoie', name: 'Courbevoie' },
      { slug: 'issy-les-moulineaux', name: 'Issy-les-Moulineaux' },
      { slug: 'cergy-pontoise', name: 'Cergy-Pontoise' }
    ],
    corridors: [
      { slug: 'idf-vers-province', destination: 'Grandes villes de province' },
      { slug: 'idf-vers-sud', destination: 'Sud de la France' },
      { slug: 'idf-vers-ouest', destination: 'Ouest (Nantes, Rennes, Bordeaux)' },
      { slug: 'idf-vers-nord', destination: 'Nord (Lille, Belgique)' },
      { slug: 'idf-vers-international', destination: 'International' }
    ]
  },

  grenoble: {
    slug: 'grenoble',
    name: 'Grenoble',
    nameCapitalized: 'Grenoble',
    region: 'Auvergne-Rhône-Alpes',
    siteUrl: 'https://devis-demenageur-grenoble.fr',
    coordinates: {
      latitude: 45.1885,
      longitude: 5.7245
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Grenoble', 'Échirolles', 'Saint-Martin-d’Hères', 'Meylan'],
    neighborhoods: [
      { slug: 'hyper-centre', name: 'Hyper-centre' },
      { slug: 'ile-verte', name: 'Île Verte' },
      { slug: 'europole', name: 'Europole / Gare' },
      { slug: 'bastille', name: 'Bastille / Quai' },
      { slug: 'eybens', name: 'Eybens / Sud grenoblois' }
    ],
    corridors: [
      { slug: 'grenoble-vers-lyon', destination: 'Lyon' },
      { slug: 'grenoble-vers-paris', destination: 'Paris' },
      { slug: 'grenoble-vers-marseille', destination: 'Marseille' },
      { slug: 'grenoble-vers-alpes', destination: 'Stations des Alpes' }
    ]
  },

  toulon: {
    slug: 'toulon',
    name: 'Toulon',
    nameCapitalized: 'Toulon',
    region: 'Provence-Alpes-Côte d\'Azur',
    siteUrl: 'https://devis-demenageur-toulon.fr',
    coordinates: {
      latitude: 43.1242,
      longitude: 5.928
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Toulon', 'La Seyne-sur-Mer', 'Hyères', 'La Garde'],
    neighborhoods: [
      { slug: 'haute-ville', name: 'Haute Ville / Centre' },
      { slug: 'port-toulon', name: 'Port de Toulon' },
      { slug: 'mourillon', name: 'Mourillon' },
      { slug: 'pont-du-las', name: 'Pont du Las' },
      { slug: 'la-serinette', name: 'La Serinette / Cap Brun' }
    ],
    corridors: [
      { slug: 'toulon-vers-marseille', destination: 'Marseille' },
      { slug: 'toulon-vers-nice', destination: 'Nice' },
      { slug: 'toulon-vers-paris', destination: 'Paris' }
    ]
  },

  dijon: {
    slug: 'dijon',
    name: 'Dijon',
    nameCapitalized: 'Dijon',
    region: 'Bourgogne-Franche-Comté',
    siteUrl: 'https://devis-demenageur-dijon.fr',
    coordinates: {
      latitude: 47.322,
      longitude: 5.0415
    },
    phone: '+33-3-XX-XX-XX-XX',
    areaServed: ['Dijon', 'Chenôve', 'Talant', 'Quetigny'],
    neighborhoods: [
      { slug: 'centre-ville', name: 'Centre-ville historique' },
      { slug: 'toison-dor', name: 'Toison d’Or' },
      { slug: 'griffon', name: 'Grangier / Griffon' },
      { slug: 'parc-colombiere', name: 'Parc de la Colombière' },
      { slug: 'universites', name: 'Quartier Universités' }
    ],
    corridors: [
      { slug: 'dijon-vers-paris', destination: 'Paris' },
      { slug: 'dijon-vers-lyon', destination: 'Lyon' },
      { slug: 'dijon-vers-strasbourg', destination: 'Strasbourg' }
    ]
  },

  angers: {
    slug: 'angers',
    name: 'Angers',
    nameCapitalized: 'Angers',
    region: 'Pays de la Loire',
    siteUrl: 'https://devis-demenageur-angers.fr',
    coordinates: {
      latitude: 47.4784,
      longitude: -0.5632
    },
    phone: '+33-2-XX-XX-XX-XX',
    areaServed: ['Angers', 'Avrillé', 'Trélazé', 'Les Ponts-de-Cé'],
    neighborhoods: [
      { slug: 'centre-ville', name: 'Centre-ville / La Doutre' },
      { slug: 'justices', name: 'Les Justices' },
      { slug: 'lac-de-maine', name: 'Lac de Maine' },
      { slug: 'monplaisir', name: 'Monplaisir' },
      { slug: 'roseraie', name: 'La Roseraie' }
    ],
    corridors: [
      { slug: 'angers-vers-nantes', destination: 'Nantes' },
      { slug: 'angers-vers-paris', destination: 'Paris' },
      { slug: 'angers-vers-rennes', destination: 'Rennes' }
    ]
  },

  'clermont-ferrand': {
    slug: 'clermont-ferrand',
    name: 'Clermont-Ferrand',
    nameCapitalized: 'Clermont-Ferrand',
    region: 'Auvergne-Rhône-Alpes',
    siteUrl: 'https://devis-demenageur-clermont-ferrand.fr',
    coordinates: {
      latitude: 45.7772,
      longitude: 3.087
    },
    phone: '+33-4-XX-XX-XX-XX',
    areaServed: ['Clermont-Ferrand', 'Chamalières', 'Cournon-d’Auvergne', 'Aubière'],
    neighborhoods: [
      { slug: 'centre-jaude', name: 'Centre-ville / Jaude' },
      { slug: 'montferrand', name: 'Montferrand' },
      { slug: 'oradou', name: 'L’Oradou' },
      { slug: 'champratel', name: 'Champratel' },
      { slug: 'la-gauthiere', name: 'La Gauthière' }
    ],
    corridors: [
      { slug: 'clermont-vers-paris', destination: 'Paris' },
      { slug: 'clermont-vers-lyon', destination: 'Lyon' },
      { slug: 'clermont-vers-montpellier', destination: 'Montpellier' }
    ]
  },

  tours: {
    slug: 'tours',
    name: 'Tours',
    nameCapitalized: 'Tours',
    region: 'Centre-Val de Loire',
    siteUrl: 'https://devis-demenageur-tours.fr',
    coordinates: {
      latitude: 47.3941,
      longitude: 0.6848
    },
    phone: '+33-2-XX-XX-XX-XX',
    areaServed: ['Tours', 'Saint-Cyr-sur-Loire', 'Joué-lès-Tours', 'La Riche'],
    neighborhoods: [
      { slug: 'centre-cathedrale', name: 'Centre-ville / Cathédrale' },
      { slug: 'vieux-tours', name: 'Vieux Tours / Place Plumereau' },
      { slug: 'velpeau', name: 'Velpeau / Gare' },
      { slug: 'deux-lions', name: 'Deux-Lions' },
      { slug: 'fontaines', name: 'Fontaines / Rochepinard' }
    ],
    corridors: [
      { slug: 'tours-vers-paris', destination: 'Paris' },
      { slug: 'tours-vers-nantes', destination: 'Nantes' },
      { slug: 'tours-vers-bordeaux', destination: 'Bordeaux' }
    ]
  },

  reims: {
    slug: 'reims',
    name: 'Reims',
    nameCapitalized: 'Reims',
    region: 'Grand Est',
    siteUrl: 'https://devis-demenageur-reims.fr',
    coordinates: {
      latitude: 49.2583,
      longitude: 4.0317
    },
    phone: '+33-3-XX-XX-XX-XX',
    areaServed: ['Reims', 'Tinqueux', 'Bétheny', 'Cormontreuil'],
    neighborhoods: [
      { slug: 'centre-cathedrale', name: 'Centre-ville / Cathédrale' },
      { slug: 'courlancy', name: 'Courlancy' },
      { slug: 'croix-rouge', name: 'Croix-Rouge' },
      { slug: 'murigny', name: 'Murigny' },
      { slug: 'laon', name: 'Avenue de Laon' }
    ],
    corridors: [
      { slug: 'reims-vers-paris', destination: 'Paris' },
      { slug: 'reims-vers-lille', destination: 'Lille' },
      { slug: 'reims-vers-luxembourg', destination: 'Luxembourg / Benelux' }
    ]
  },

  'le-havre': {
    slug: 'le-havre',
    name: 'Le Havre',
    nameCapitalized: 'Le Havre',
    region: 'Normandie',
    siteUrl: 'https://devis-demenageur-le-havre.fr',
    coordinates: {
      latitude: 49.4944,
      longitude: 0.1079
    },
    phone: '+33-2-XX-XX-XX-XX',
    areaServed: ['Le Havre', 'Montivilliers', 'Harfleur', 'Sainte-Adresse'],
    neighborhoods: [
      { slug: 'centre-reconstruit', name: 'Centre-ville reconstruit' },
      { slug: 'saint-vincent', name: 'Saint-Vincent / Plage' },
      { slug: 'graville', name: 'Graville' },
      { slug: 'caucriauville', name: 'Caucriauville' },
      { slug: 'sanvic', name: 'Sanvic / Sainte-Adresse' }
    ],
    corridors: [
      { slug: 'lehavre-vers-paris', destination: 'Paris' },
      { slug: 'lehavre-vers-rouen', destination: 'Rouen' },
      { slug: 'lehavre-vers-bretagne', destination: 'Bretagne / Ouest' }
    ]
  }
};

/**
 * Résoudre les données de ville à partir du SITE_SLUG
 */
export function getCityData(slug?: string): CityData {
  const citySlug = slug?.toLowerCase() || 'toulouse'; // Fallback par défaut
  
  if (!cityData[citySlug]) {
    console.warn(`⚠️ Ville inconnue: ${citySlug}, utilisation de toulouse par défaut`);
    return cityData.toulouse;
  }
  
  return cityData[citySlug];
}

/**
 * Obtenir le nom de ville depuis l'URL du site
 * Supporte les formats:
 *   - ville-demenageur.fr (marseille-demenageur.fr)
 *   - devis-demenageur-ville.fr (devis-demenageur-bordeaux.fr)
 */
export function getCityDataFromUrl(siteUrl: string): CityData {
  // Cas spéciaux d'abord
  if (siteUrl.includes('toulousain')) return cityData.toulouse;
  if (siteUrl.includes('parisien')) return cityData.paris;
  
  // Format: demenageur-ville (ex: devis-demenageur-bordeaux.fr, devis-demenageur-clermont-ferrand.fr)
  let match = siteUrl.match(/demenageur[s]?[-_]([a-z-]+)/i);
  if (match && match[1] !== 'fr') {
    const citySlug = match[1];
    return getCityData(citySlug);
  }
  
  // Format: ville-demenageur (ex: marseille-demenageur.fr, le-havre-demenageur.fr)
  match = siteUrl.match(/([a-z-]+)[-_]demenageur/i);
  if (match) {
    const citySlug = match[1];
    // Exclure les mots qui ne sont pas des villes
    if (!['www', 'devis', 'http', 'https'].includes(citySlug)) {
      return getCityData(citySlug);
    }
  }
  
  // Fallback par défaut
  console.warn(`⚠️ Impossible d'extraire la ville depuis l'URL: ${siteUrl}, utilisation de toulouse par défaut`);
  return cityData.toulouse;
}

