import { DashboardComponent } from './+dashboard/dashboard.component';
import { HeaderNavComponent } from './+shared/components/header-nav/header-nav.component';
import { SharedModule } from './+shared/shared.module';
import { CoreModule } from './+core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app.routing.module';
import { SettingsComponent } from './+settings/settings/settings.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDnlwOMruL6jJzIRS6ENE-bJQtBelXLk8c",
  authDomain: "panel-frenzie.firebaseapp.com",
  databaseURL: "https://panel-frenzie.firebaseio.com",
  storageBucket: "panel-frenzie.appspot.com",
  messagingSenderId: "182484186193"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    HeaderNavComponent,
    SettingsComponent
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
