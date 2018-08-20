import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <h4><span *ngIf="!!stockSymbol">Buying{{ quantity }} shares of {{ stockSymbol }}</span></h4>
  `,
  styles: [`
    :host { background: cyan; }
  `]
})
export class OrderComponent implements OnInit {
  @Input() quantity: number;
  @Input() stockSymbol: string;
  
  constructor() { }

  ngOnInit() {
  }

}
