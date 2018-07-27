import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class='container'>
    <div class='row'>
    <h2>Routed Home Page {{ userId }}</h2>
    </div>    
  </div>
`,
styles: [ `
  .container {
    margin-top: 20px;
    border: 15px blue solid;
  }
  h2 {
    color: blue;
  }
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
