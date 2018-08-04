import { Injectable } from '@angular/core';
/* Author: David Tays
   Date:   08/01/18
   Description: async-pipe and observable arrays
 */

 import { Fruit } from "./fruit";
import { Observable, of } from 'rxjs';
//import 'rxjs/add/observable/of';

@Injectable()
export class FruitService {
  fruits: Fruit[] = [
    {id: 1, name: 'apple', pricePerPound: '$3.99', quantity: 200},
    {id: 2, name: 'orange', pricePerPound: '$2.99', quantity: 100},
    {id: 3, name: 'kiwi', pricePerPound: '$3.99', quantity: 300},
    {id: 4, name: 'banana', pricePerPound: '$1.99', quantity: 220},
    {id: 5, name: 'pineapple', pricePerPound: '$4.99', quantity: 250}
  ];

  constructor() { }
  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
