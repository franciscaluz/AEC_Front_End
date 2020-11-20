import {Component, Input, OnInit} from '@angular/core';
import { Forfaits } from '../forfaits';
@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.scss']
})
export class ForfaitMiniComponent implements OnInit {
  @Input() forfait: Forfaits;

  constructor() { }

  ngOnInit(): void {
  }

}
