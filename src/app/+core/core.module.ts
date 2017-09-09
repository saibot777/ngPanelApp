import { SharedModule } from './../+shared/shared.module';
import { ClientsModule } from './../+clients/clients.module';
import { AuthModule } from './../+auth/auth.module';
import { DashboardComponent } from './../+dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      HttpModule,
      AuthModule,
      SharedModule,
      ClientsModule
    ],
  exports : [
    CommonModule,
    BrowserModule
  ],
  declarations: [ 
    DashboardComponent
  ],
})
export class CoreModule { }