import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  template: `
    <h2>Seller {{ sellerId }}'s Product</h2>
    <p>
      What a great Product!
    </p>
  `,
  styles: [ `
    :host { background: yellow; } `
  ]
})
export class ProductDescriptionComponent implements OnInit {
  sellerId: string;
  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
