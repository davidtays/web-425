/* Author: David Tays
   Date:   08/01/18
   Description: Dependency Injection
 */

import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";
// instantiates and returns a new Fruit object to the caller
@Injectable()
export class FruitService {
  getFruit(): Fruit{
    return new Fruit( 1000, "Apple", "red");
  }
}
