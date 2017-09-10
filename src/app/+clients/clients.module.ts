import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { clientsComponents, clientsServices } from './clients.collections';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      HttpModule,
  ],
  exports : [
      CommonModule,
      BrowserModule
  ],
  declarations: [
    ...clientsComponents
  ],
  providers: [
    ...clientsServices,
    AngularFireDatabase
  ]
})
export class ClientsModule { }