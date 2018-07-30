import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="home">Davids Home Component</h1>
  `,
  styles: [`
    .home {
      background-color: lightbrown;
      border: 10px darkred solid;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
