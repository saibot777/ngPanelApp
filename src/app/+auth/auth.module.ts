import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { authComponents, authServices } from './auth.collections';

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
    ...authComponents
  ],
  providers: [
    ...authServices
  ]
})
export class AuthModule { }