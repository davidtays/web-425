/* Author: David Tays
   Date:   08/01/18
   Description: Dependency Injection
 */

// Create and export a fruit class with parameterized constructor of 3 fields 
export class Fruit {
    constructor(public id: number,
                public name: string,
                public color: string){}
}
