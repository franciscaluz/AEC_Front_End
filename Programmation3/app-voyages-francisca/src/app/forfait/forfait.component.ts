import { Component, OnInit, Input } from '@angular/core';
import { Forfaits } from '../forfaits';
import {FORFAITS} from "../mock-forfaits";

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.scss']
})
export class ForfaitComponent implements OnInit {
  @Input() forfait: Forfaits;

  constructor() { }

  ngOnInit(): void {
    console.log(this.forfait);
  }
  // getRatings() {
  //   const totalStars = 5;
  //   const total = totalStars.valueOf() - this.forfait.hotel.etoile.valueOf();
  // }
}
