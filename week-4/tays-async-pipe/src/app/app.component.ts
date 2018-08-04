/* Author: David Tays
   Date:   08/01/18
   Description: async-pipe and observable arrays
 */

 import { Component } from '@angular/core';
import {Fruit} from "./fruit";
import {Observable} from "rxjs";
import {FruitService} from "./fruit.service";

@Component({
  selector: 'app-root',
  template: `
  <br /><br />
  <div class="table-responsive">
    <table class="table table-striped table-hover table-sm">
    <caption>Table of fruits by david tays</caption>
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Qty</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let fruit of fruits | async">
          <td>{{fruit.id}}</td>
          <td>{{fruit.name}}</td>
          <td>{{fruit.pricePerPound}}</td>
          <td>{{fruit.quantity}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits: Observable<Fruit[]>;
  title = 'app';
  
  constructor(private fruitService: FruitService){}

  ngOnInit(){
    this.fruits = this.fruitService.getFruits();
  }
}
