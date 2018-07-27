import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
  <div class='container'>
    <div class='row'>
    <h2>The PAGE you are requesting is NOT FOUND</h2>
    </div>    
  </div>
`,
styles: [ `
  .container {
    margin-top: 20px;
    border: 15px red solid;
  }
  h2 {
    color: red;
  }
`]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
