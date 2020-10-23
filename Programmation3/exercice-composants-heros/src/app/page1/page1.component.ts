import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  hero1 = 'Mon premier hero';
  hero2 = 'Mon deuxième hero';
  hero3 = 'Mon troisième hero';

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'yellow'},
    {text: 'Two', cols: 3, rows: 1, color: 'lightgray'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Five', cols: 1, rows: 1, color: 'lightpink'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
