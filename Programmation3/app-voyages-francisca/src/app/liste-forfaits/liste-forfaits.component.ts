import { Component, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.scss']
})
export class ListeForfaitsComponent implements OnInit {
  forfaits: Forfaits[] = FORFAITS;

  constructor() { }

  ngOnInit(): void {
    console.log(this.forfaits);
  }

}
