import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  template: `
    <h1 class="product">David's Product Detail Component</h1>

    <input placeholder="Enter your name" type="text" [formControl]="name">
  `,
  styles: [`
    .product {
      margin-top: 20px;
      background-color: lightbrown;
      border: 10px darkbrown dotted;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  name: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
