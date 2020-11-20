import { Component, OnInit, Input } from '@angular/core';
import { Forfaits } from '../forfaits';

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

}
