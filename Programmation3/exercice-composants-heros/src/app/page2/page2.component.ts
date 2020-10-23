import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  hero1 = 'Mon hero 1';
  hero2 = 'Mon hero 2';
  hero3 = 'Mon hero 3';
  hero4 = 'Mon hero 4';
  hero5 = 'Mon hero 5';

  constructor() { }

  ngOnInit(): void {
  }
}
