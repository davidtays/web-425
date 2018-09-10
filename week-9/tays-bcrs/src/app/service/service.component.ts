import { Component, OnInit } from '@angular/core';
import { ServiceService } from "./service.service";
import { Service} from "./service";
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-service',
  template: `
  
      <h2>Bob's Services</h2>
      <mat-list>
        <mat-list-item *ngFor="let s of services"><mat-checkbox>{{s.name}}</mat-checkbox><mat-divider></mat-divider></mat-list-item>
      </mat-list>
      <form class="form-container">

      <mat-form-field>
        <input matInput value="Enter Value">
      </mat-form-field>

      <mat-form-field>
        <input matInput value="Hours of Labor @$50.00">
      </mat-form-field>

      <mat-form-field>
        <input matInput [matDatepicker]="picker">

        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>

        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>

    </form>

    <button mat-raised-button (click)="openInvoiceDialog()" color="accent">Submit</button>
    
  `,
  styles: [`
  #picker {
    background-color: #fff;
    max-width: 200px;
    text-align: center;
  }
  `]
})
export class ServiceComponent implements OnInit {
  title: "app-service";
  IsChecked:boolean;
  IsIndeterminate:boolean;
  LabelAlign:string;
  IsDisabled:boolean;

  services = [
    new Service("Password Reset", 39.99),
    new Service("Spyware Removal", 99.99),
    new Service("RAM Upgrade", 129.99),
    new Service("Software Installation", 49.99),
    new Service("Tune-up", 89.99),
    new Service("Keyboard Cleaning", 45.00),
    new Service("Disk Clean-up", 149.99),
  ]
  constructor() {
    this.IsChecked =false;
    this.IsIndeterminate =false;
    this.LabelAlign ='after';
    this.IsDisabled =false;
  }

  ngOnInit() {
  }

}
