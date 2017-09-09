import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { sharedComponents } from './shared.collections';

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
    ...sharedComponents
  ],
})
export class SharedModule { }