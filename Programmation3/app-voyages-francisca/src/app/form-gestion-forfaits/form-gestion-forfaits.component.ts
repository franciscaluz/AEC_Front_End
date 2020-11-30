import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-gestion-forfaits',
  templateUrl: './form-gestion-forfaits.component.html',
  styleUrls: ['./form-gestion-forfaits.component.scss']
})
export class FormGestionForfaitsComponent implements OnInit {
  constructor() {}
  champsObligatoire = 'Ce champs est obligatoire.';
  villeDestination: '';
  paysDestination: '';
  villeDepart: '';
  nomHotel: '';
  adresseHotel: '';
  nbEtoile: '';
  nbChambre: '';
  caracteristiques: '';
  dateDepart: '';
  dateRetour: '';
  prix: '';
  rabais: '';
  rabaisPourcentage: '';
  ngOnInit(): void {
  }
}
