import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Home Page in Angular</h2>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
        justify: center;
      }
      h2 {
        color: black;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
