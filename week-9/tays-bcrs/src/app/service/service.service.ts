import { Injectable } from '@angular/core';
import { Service } from "./service";


@Injectable()
export class ServiceService {
  getService(): Service {
    return new Service("Viral Scan", 59.99);
  }
  constructor() { }
}
