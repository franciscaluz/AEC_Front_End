import { Forfaits } from './forfaits';

export const FORFAITS: Forfaits[] = [
    {
        id: '1',
        destination: 'Mexique',
        ville_depart: 'Montréal',
        hotel: {
            id: '1',
            nom: 'Rosa Maria',
            adresse: '12345 Salinas',
            etoile: 5,
            nombre_chambre: 50,
            caracteristiques: [
                'Face à la mer',
                'Animaux acceptés',
            ]
        },
        date_depart: '12-12-21',
        date_retour: '20-01-21',
        prix: 1150,
    },

    {
        id: '2',
        destination: 'Seychelles',
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
    },

    {
        id: '3',
        destination: 'Grèce',
        ville_depart: 'Montréal',
        hotel: {
            id: '1',
            nom: 'Cap 20',
            adresse: '12345 Seaside, Zakynthos',
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
    },

];