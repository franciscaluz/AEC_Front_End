import { Hotels } from './hotels';

export interface Forfaits {
    id: string;
    ville_destination: string;
    pays_destination: string,
    ville_depart: string;
    hotel: Hotels;
    date_depart: string;
    date_retour: string;
    prix: number;
    rabais: number;
    photo: string;
    vedette: boolean;
}
