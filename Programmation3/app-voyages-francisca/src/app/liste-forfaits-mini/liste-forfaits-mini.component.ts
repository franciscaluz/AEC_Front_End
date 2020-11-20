import { Component, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfaits-mini',
  templateUrl: './liste-forfaits-mini.component.html',
  styleUrls: ['./liste-forfaits-mini.component.scss']
})
export class ListeForfaitsMiniComponent implements OnInit {
  forfaits: Forfaits[] = FORFAITS;
  constructor() { }

  ngOnInit(): void {
  }

}
