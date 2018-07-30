import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1 class="home">Please login on this page</h1>
  `,
  styles: [`
  .home {
    margin-top: 20px;
    background-color: lightbrown;
    border: 10px darkred solid;
  }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
