import { Hotels } from './hotels';

export interface Forfaits {
    id: string;
    destination: string;
    ville_depart: string;
    hotel: Hotels;
    date_depart: string;
    date_retour: string;
    prix: number;
}
