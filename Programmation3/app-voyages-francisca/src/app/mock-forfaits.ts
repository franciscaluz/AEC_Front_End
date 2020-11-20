import { Forfaits } from './forfaits';

export const FORFAITS: Forfaits[] = [
  {
    id: '1',
    ville_destination: 'Tolatongo',
    pays_destination: 'Mexique',
    ville_depart: 'Montréal',
    hotel: {
      id: '1',
      nom: 'Rosa Maria',
      adresse: '12345 Salinas',
      etoile: 5,
      nombre_chambre: 50,
      caracteristiques: [
        'A quelques mètres des grottes Tolango',
        'Piscine accessible',
        'Tirolienne',
        'Restaurant inclus',
        'Places de camping',
        'Stationnement gratuit',
      ]
    },
    date_depart: '12-12-21',
    date_retour: '20-01-21',
    prix: 1150,
    rabais: 0,
    photo: 'cette photo',
    vedette: true,
  },

  {
    id: '2',
    ville_destination: 'Seychelles',
    pays_destination: 'Iles Seychelles',
    ville_depart: 'Montréal',
    hotel: {
      id: '1',
      nom: 'Cap 20',
      adresse: '12345 Seaside',
      etoile: 5,
      nombre_chambre: 100,
      caracteristiques: [
        'Face à la mer',
        'Animaux acceptés',
      ]
    },
    date_depart: '12-12-21',
    date_retour: '20-01-21',
    prix: 1150,
    rabais: 0,
    photo: 'cette photo',
    vedette: false,
  },

  {
    id: '3',
    ville_destination: 'Zakynthos',
    pays_destination: 'Grèce',
    ville_depart: 'Montréal',
    hotel: {
      id: '1',
      nom: 'Lesante Blu',
      adresse: 'Tragaki, Zakynthos 29100, Grèce',
      etoile: 5,
      nombre_chambre: 100,
      caracteristiques: [
        'Face à la mer',
        '2 Piscines',
        'WiFi gratuit',
        'Petit-Déjeuner inclus',
        'Machine à café/thé disponibles dans chaque chambre',
        'Bar',
      ]
    },
    date_depart: '03-05-21',
    date_retour: '10-05-21',
    prix: 1587.82,
    rabais: 30,
    photo: '../../assets/images/zakynthos-grece.jpg',
    vedette: true,
  },

];
