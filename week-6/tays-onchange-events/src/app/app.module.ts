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
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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