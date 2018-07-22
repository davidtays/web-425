import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
    styles: [
      `
        h1{
          color: red;
        }
      `
    ]
  })
export class AppComponent {
  title = 'app';
  //class property
  name:string = "David Tays";
  //change the name function
  changeName(){
    this.name = "Dave Tays"
  }
}
