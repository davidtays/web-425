/* Author: David Tays
   Date:   08/01/18
   Description: Dependency Injection
 */

import { Component, OnInit } from '@angular/core';
import { FruitService } from "./fruit.service";
import { Fruit} from "./fruit";
// inline Bootstrap 4 template maps the Fruit properties to the table body
@Component({
  selector: 'app-fruit',
  template: `
  <div class="container">
  <div class="row">
    <h2>Fruit Details</h2>
    <table class="table table-hover table-striped">
      <thead class="tbl-header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ fruit.id }}</td>
          <td>{{ fruit.name }}</td>
          <td>{{ fruit.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  `,
  styles: [`
    .tbl-header {
      background-color: steelblue;
      color: white; 
    }
  `],
  providers: [FruitService]
})

export class FruitComponent implements OnInit {
  // create a fruit property and in the classes constructor call the fruitService.getFruit() method
  fruit: Fruit;
  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
   }

  ngOnInit() {
  }

}
