import { HeaderNavComponent } from './+shared/header-nav/header-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app.routing.module';
import { DashboardComponent } from './+dashboard/dashboard.component';
import { ClientDetailsComponent } from './+clients/client-details/client-details.component';
import { AddClientComponent } from './+clients/add-client/add-client.component';
import { EditClientComponent } from './+clients/edit-client/edit-client.component';
import { LoginComponent } from './+auth/login/login.component';
import { RegisterComponent } from './+auth/register/register.component';
import { PageNotFoundComponent } from './+auth/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    HeaderNavComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
