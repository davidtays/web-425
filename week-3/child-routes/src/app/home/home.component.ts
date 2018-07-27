import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Hello World!</h1>
    <p>
      Click a link!!!!!!!!!
    </p>
  `,
  styles: [ `
    :host { background: pink; } `
  ]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
