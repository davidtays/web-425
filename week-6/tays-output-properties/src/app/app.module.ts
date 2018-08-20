/* Angular Material dependencies 
npm install @angular/material --save*
npm install @angular/cdk --save*
npm install @angular/animations –save*
npm install @angular/flex-layout *
If you run into issues try npm install --save @angular/flex-layout@6.0.0-beta.15 instead.
Import Modules (app.module.ts) 
BrowserAnimationsModule
MatButtonModule
MatIconModule
MatMenuModule
MatToolbarModule
FlexLayoutModule */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatSidenavModule 
} from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceQuoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
