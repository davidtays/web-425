import { Component, OnInit } from '@angular/core';
// need Activated Route Imported
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  // template has the routeroutlet and custom message
  template: `
    <div class="product">
      <h1>Product Detail for Product requested: {{productId}}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Information</a></p>
    </div>
  `,
  styles: [ `
    .product {
      background-color: lightbrown;
      border: 10px darkbrown dotted;
    }
  `

  ]
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  sellerId = 5678;
  //Add the Activated Route as a parameter to the constructor and declare productId
  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
