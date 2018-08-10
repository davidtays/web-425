import { Component, OnInit } from '@angular/core';
//import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  template: `
  <mat-toolbar class="menu" role="header" color="primary">
  <mat-toolbar-row>
    <button mat-button class="toolbar__icon-button mat-button">
      <mat-icon>web</mat-icon>
      <span style="margin-left: 5px !important;">WEB 425</span>
    </button>
    <button mat-button class="mat-button">
      About
    </button>
    <button mat-button class="mat-button">
      Contact Us
    </button>

    <div fxFlex></div>

    <!-- User Profile -->
    <button class="toolbar__icon-button" [matMenuTriggerFor]="menu" mat-icon-button>
      <mat-icon>account_circle</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item>
        <mat-icon>perm_contact_calendar</mat-icon>
        <span>My Profile</span>
      </button>
      <button mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </button>
      <button mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>Logout</span>
      </button>

    </mat-menu>
  </mat-toolbar-row>

</mat-toolbar>



<div class="wrapper">
  <div fxFlex fxLayout="row">
      <div class="childOfWrapper" fxFlex='20'>0 20%</div>
      <div class="anotherChildOfWrapper" fxFlex>
        <app-login></app-login>
      </div>
  </div>
</div>
  `,
  styles: [`
  
  
  /* Global */
  .menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
      color: white;
  }
  .wrapper{
      padding: 70px 30px;
      display: block;
  }
  /* left sidebar styles */
    .childOfWrapper { 
      background-color: cyan; 
      margin: 0;
    }
    
    .anotherChildOfWrapper {
      background-color: yellow; 
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
